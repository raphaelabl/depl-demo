package at.htl.entity;

import javax.ws.rs.FormParam;
import java.io.File;

public class Resource {

    @FormParam("image")
    public File file;

    @FormParam("text")
    public String text;


}
