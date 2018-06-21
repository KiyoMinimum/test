var skytree = new Cesium.Viewer('cesiumContainer');
 viewer.dataSources.add(Cesium.KmlDataSource.load('./towers_polygon.kml'));
 viewer.zoomTo(skytree); 
