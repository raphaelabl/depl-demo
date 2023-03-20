package at.htl.boundary;

import at.htl.entity.Resource;
import at.htl.model.Image;
import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;
import org.jboss.resteasy.plugins.providers.multipart.InputPart;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.xml.transform.dom.DOMResult;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@Path("image")
public class ImageResource {


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Image> getImages(){
        return Image.listAll();
    }


    @POST
    @Path("old")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public void AddNewImage(MultipartFormDataInput input){
        Map<String, List<InputPart>> inputForm = input.getFormDataMap();
        inputForm.forEach((inputType, inputParts)->{
            try {
                switch (inputType) {
                    case "image":
                        System.out.println(inputParts.get(0));
                        break;
                    case "text":
                        System.out.println(inputParts.get(0).getBodyAsString());
                        break;
                }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        } );
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postImage(Image img){
        img.persist();
    }


    @POST
    @Path("upload")
    @Transactional
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public void postImage2(@MultipartForm Resource resource) {
        System.out.println(resource.file.getAbsolutePath());
        System.out.println(resource.text);
    }

}
