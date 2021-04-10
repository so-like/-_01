class 88888{

    public static void main(String [] args ) {

    }

    public Map<String, Object> getParams(String url) {
        if(isNull(url)) return new HashMap();
        Map<String, Object> map = new hashMap<String, Object>();
        Arrays.stream(url.split("?")[1].split("&")).foreach(i -> {
            map.put(i.split("=")[0], i.split("=")[1])
        })
        return map;
    }
}