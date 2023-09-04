export class Constant{
    // public static phpServerURL = "http://www.in3.co.in/in3.co.in/DemoUpSkill/PortalApi/";
    // public static phpServerURL = "/in3.co.in/DemoUpSkill/PortalApi/";

    // public static phpServerURL = "http://www.trinityapplab.in/DemoUpSkill/PortalApi/";
    public static phpServerURL = "/DemoUpSkill/PortalApi/";

    public static tndBaseURL = "/HSIL_TND_WP/TND/";
    // public static serverURL = "/HSIL_TND_WP/FSR/";
    // public static ftpReportURL = "/FTPReport/ftp/";

    public static SUCCESSFUL_RESPONSE = "100000";
    public static SUCCESSFUL_STATUS_CODE = "100000";
    public static GENERIC_DATABASE_ERROR = "-102003";
    public static NO_RECORDS_FOUND_CODE = "102001";
    public static NO_RECORD_FOUND = "No Record Found";
    public static TRINITY_PRIVATE_KEY = "TRINITYPRIVATEKEY";
    public static GOOGLE_MAP_API_KEY = "AIzaSyDkv0_3UwK1Y_EpQ1LHQr5KA5oVBMc1160";
    public static SERVER_ERROR = "Server Error"
    public static ORGANIZATION = "ORG";
	public static LOCATION = "LOC";
    public static DEPARTMENT = "DEPT";
    public static GROUP_TRAINING = "GROUP";
    public static LOGIN_LOGO = "Login";
    public static NAVBAR_LOGO = "Navbar";
    public static TITLE_LOGO = "Title";
    public static TAG_LOGO = "Tag";
    public static LOGIN_TAGLINE = "LoginTagline";
    public static NAVBAR_TAGLINE = "NavbarTagline";
    public static MEDIA_BUTTON_TEXT = "MediaButtonText";

    public static BRILLOCA_LOGO = "BRILLOCA_Logo";
    public static HSIL_LOGO = "HSIL_Logo";
    public static SHIL_LOGO = "SHIL_Logo";


    public static TOSTER_FADEOUT_TIME = 1000;

    public static returnServerErrorMessage(serviceName:string):string{
        return "Server error while invoking "+serviceName+ " service";
    }
}