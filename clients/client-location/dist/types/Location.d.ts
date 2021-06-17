import { LocationClient } from "./LocationClient";
import { AssociateTrackerConsumerCommandInput, AssociateTrackerConsumerCommandOutput } from "./commands/AssociateTrackerConsumerCommand";
import { BatchDeleteDevicePositionHistoryCommandInput, BatchDeleteDevicePositionHistoryCommandOutput } from "./commands/BatchDeleteDevicePositionHistoryCommand";
import { BatchDeleteGeofenceCommandInput, BatchDeleteGeofenceCommandOutput } from "./commands/BatchDeleteGeofenceCommand";
import { BatchEvaluateGeofencesCommandInput, BatchEvaluateGeofencesCommandOutput } from "./commands/BatchEvaluateGeofencesCommand";
import { BatchGetDevicePositionCommandInput, BatchGetDevicePositionCommandOutput } from "./commands/BatchGetDevicePositionCommand";
import { BatchPutGeofenceCommandInput, BatchPutGeofenceCommandOutput } from "./commands/BatchPutGeofenceCommand";
import { BatchUpdateDevicePositionCommandInput, BatchUpdateDevicePositionCommandOutput } from "./commands/BatchUpdateDevicePositionCommand";
import { CalculateRouteCommandInput, CalculateRouteCommandOutput } from "./commands/CalculateRouteCommand";
import { CreateGeofenceCollectionCommandInput, CreateGeofenceCollectionCommandOutput } from "./commands/CreateGeofenceCollectionCommand";
import { CreateMapCommandInput, CreateMapCommandOutput } from "./commands/CreateMapCommand";
import { CreatePlaceIndexCommandInput, CreatePlaceIndexCommandOutput } from "./commands/CreatePlaceIndexCommand";
import { CreateRouteCalculatorCommandInput, CreateRouteCalculatorCommandOutput } from "./commands/CreateRouteCalculatorCommand";
import { CreateTrackerCommandInput, CreateTrackerCommandOutput } from "./commands/CreateTrackerCommand";
import { DeleteGeofenceCollectionCommandInput, DeleteGeofenceCollectionCommandOutput } from "./commands/DeleteGeofenceCollectionCommand";
import { DeleteMapCommandInput, DeleteMapCommandOutput } from "./commands/DeleteMapCommand";
import { DeletePlaceIndexCommandInput, DeletePlaceIndexCommandOutput } from "./commands/DeletePlaceIndexCommand";
import { DeleteRouteCalculatorCommandInput, DeleteRouteCalculatorCommandOutput } from "./commands/DeleteRouteCalculatorCommand";
import { DeleteTrackerCommandInput, DeleteTrackerCommandOutput } from "./commands/DeleteTrackerCommand";
import { DescribeGeofenceCollectionCommandInput, DescribeGeofenceCollectionCommandOutput } from "./commands/DescribeGeofenceCollectionCommand";
import { DescribeMapCommandInput, DescribeMapCommandOutput } from "./commands/DescribeMapCommand";
import { DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput } from "./commands/DescribePlaceIndexCommand";
import { DescribeRouteCalculatorCommandInput, DescribeRouteCalculatorCommandOutput } from "./commands/DescribeRouteCalculatorCommand";
import { DescribeTrackerCommandInput, DescribeTrackerCommandOutput } from "./commands/DescribeTrackerCommand";
import { DisassociateTrackerConsumerCommandInput, DisassociateTrackerConsumerCommandOutput } from "./commands/DisassociateTrackerConsumerCommand";
import { GetDevicePositionCommandInput, GetDevicePositionCommandOutput } from "./commands/GetDevicePositionCommand";
import { GetDevicePositionHistoryCommandInput, GetDevicePositionHistoryCommandOutput } from "./commands/GetDevicePositionHistoryCommand";
import { GetGeofenceCommandInput, GetGeofenceCommandOutput } from "./commands/GetGeofenceCommand";
import { GetMapGlyphsCommandInput, GetMapGlyphsCommandOutput } from "./commands/GetMapGlyphsCommand";
import { GetMapSpritesCommandInput, GetMapSpritesCommandOutput } from "./commands/GetMapSpritesCommand";
import { GetMapStyleDescriptorCommandInput, GetMapStyleDescriptorCommandOutput } from "./commands/GetMapStyleDescriptorCommand";
import { GetMapTileCommandInput, GetMapTileCommandOutput } from "./commands/GetMapTileCommand";
import { ListDevicePositionsCommandInput, ListDevicePositionsCommandOutput } from "./commands/ListDevicePositionsCommand";
import { ListGeofenceCollectionsCommandInput, ListGeofenceCollectionsCommandOutput } from "./commands/ListGeofenceCollectionsCommand";
import { ListGeofencesCommandInput, ListGeofencesCommandOutput } from "./commands/ListGeofencesCommand";
import { ListMapsCommandInput, ListMapsCommandOutput } from "./commands/ListMapsCommand";
import { ListPlaceIndexesCommandInput, ListPlaceIndexesCommandOutput } from "./commands/ListPlaceIndexesCommand";
import { ListRouteCalculatorsCommandInput, ListRouteCalculatorsCommandOutput } from "./commands/ListRouteCalculatorsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTrackerConsumersCommandInput, ListTrackerConsumersCommandOutput } from "./commands/ListTrackerConsumersCommand";
import { ListTrackersCommandInput, ListTrackersCommandOutput } from "./commands/ListTrackersCommand";
import { PutGeofenceCommandInput, PutGeofenceCommandOutput } from "./commands/PutGeofenceCommand";
import { SearchPlaceIndexForPositionCommandInput, SearchPlaceIndexForPositionCommandOutput } from "./commands/SearchPlaceIndexForPositionCommand";
import { SearchPlaceIndexForTextCommandInput, SearchPlaceIndexForTextCommandOutput } from "./commands/SearchPlaceIndexForTextCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * Suite of geospatial services including Maps, Places, Routes, Tracking, and Geofencing
 */
export declare class Location extends LocationClient {
    /**
     * <p>Creates an association between a geofence collection and a tracker resource. This
     *             allows the tracker resource to communicate location data to the linked geofence
     *             collection.</p>
     *         <note>
     *             <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p>
     *         </note>
     */
    associateTrackerConsumer(args: AssociateTrackerConsumerCommandInput, options?: __HttpHandlerOptions): Promise<AssociateTrackerConsumerCommandOutput>;
    associateTrackerConsumer(args: AssociateTrackerConsumerCommandInput, cb: (err: any, data?: AssociateTrackerConsumerCommandOutput) => void): void;
    associateTrackerConsumer(args: AssociateTrackerConsumerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateTrackerConsumerCommandOutput) => void): void;
    /**
     * <p>Deletes the position history of one or more devices from a tracker resource.</p>
     */
    batchDeleteDevicePositionHistory(args: BatchDeleteDevicePositionHistoryCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteDevicePositionHistoryCommandOutput>;
    batchDeleteDevicePositionHistory(args: BatchDeleteDevicePositionHistoryCommandInput, cb: (err: any, data?: BatchDeleteDevicePositionHistoryCommandOutput) => void): void;
    batchDeleteDevicePositionHistory(args: BatchDeleteDevicePositionHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteDevicePositionHistoryCommandOutput) => void): void;
    /**
     * <p>Deletes a batch of geofences from a geofence collection.</p>
     *         <note>
     *             <p>This operation deletes the resource permanently.</p>
     *         </note>
     */
    batchDeleteGeofence(args: BatchDeleteGeofenceCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteGeofenceCommandOutput>;
    batchDeleteGeofence(args: BatchDeleteGeofenceCommandInput, cb: (err: any, data?: BatchDeleteGeofenceCommandOutput) => void): void;
    batchDeleteGeofence(args: BatchDeleteGeofenceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteGeofenceCommandOutput) => void): void;
    /**
     * <p>Evaluates device positions against the geofence geometries from a given geofence
     *             collection. The evaluation determines if the device has entered or exited a geofenced
     *             area, which publishes ENTER or EXIT geofence events to Amazon EventBridge.</p>
     *         <note>
     *             <p>The last geofence that a device was observed within, if any, is tracked for 30
     *                 days after the most recent device position update</p>
     *         </note>
     */
    batchEvaluateGeofences(args: BatchEvaluateGeofencesCommandInput, options?: __HttpHandlerOptions): Promise<BatchEvaluateGeofencesCommandOutput>;
    batchEvaluateGeofences(args: BatchEvaluateGeofencesCommandInput, cb: (err: any, data?: BatchEvaluateGeofencesCommandOutput) => void): void;
    batchEvaluateGeofences(args: BatchEvaluateGeofencesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchEvaluateGeofencesCommandOutput) => void): void;
    /**
     * <p>A batch request to retrieve all device positions.</p>
     */
    batchGetDevicePosition(args: BatchGetDevicePositionCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetDevicePositionCommandOutput>;
    batchGetDevicePosition(args: BatchGetDevicePositionCommandInput, cb: (err: any, data?: BatchGetDevicePositionCommandOutput) => void): void;
    batchGetDevicePosition(args: BatchGetDevicePositionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetDevicePositionCommandOutput) => void): void;
    /**
     * <p>A batch request for storing geofence geometries into a given geofence collection, or
     *             updates the geometry of an existing geofence if a geofence ID is included in the request.</p>
     */
    batchPutGeofence(args: BatchPutGeofenceCommandInput, options?: __HttpHandlerOptions): Promise<BatchPutGeofenceCommandOutput>;
    batchPutGeofence(args: BatchPutGeofenceCommandInput, cb: (err: any, data?: BatchPutGeofenceCommandOutput) => void): void;
    batchPutGeofence(args: BatchPutGeofenceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchPutGeofenceCommandOutput) => void): void;
    /**
     * <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location
     *             uses the data when reporting the last known device position and position history.</p>
     *          <note>
     *            <p>Only one position update is stored per sample time. Location data is sampled at a
     *                 fixed rate of one position per 30-second interval and retained for 30 days before
     *                 it's deleted.</p>
     *          </note>
     */
    batchUpdateDevicePosition(args: BatchUpdateDevicePositionCommandInput, options?: __HttpHandlerOptions): Promise<BatchUpdateDevicePositionCommandOutput>;
    batchUpdateDevicePosition(args: BatchUpdateDevicePositionCommandInput, cb: (err: any, data?: BatchUpdateDevicePositionCommandOutput) => void): void;
    batchUpdateDevicePosition(args: BatchUpdateDevicePositionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchUpdateDevicePositionCommandOutput) => void): void;
    /**
     * <p>
     *             <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters:
     *                 <code>DeparturePostiton</code> and <code>DestinationPosition</code>. Requires that
     *             you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create
     *                 aroute calculator resource</a>
     *          </p>
     *         <p>By default, a request that doesn't specify a departure time uses the best time of day
     *             to travel with the best traffic conditions when calculating the route.</p>
     *         <p>Additional options include:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#departure-time">Specifying a departure time</a> using either <code>DepartureTime</code> or
     *                         <code>DepartureNow</code>. This calculates a route based on predictive
     *                     traffic data at the given time. </p>
     *                 <note>
     *                     <p>You can't specify both <code>DepartureTime</code> and
     *                             <code>DepartureNow</code> in a single request. Specifying both
     *                         parameters returns an error message.</p>
     *                 </note>
     *             </li>
     *             <li>
     *                 <p>
     *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#travel-mode">Specifying a travel mode</a> using TravelMode. This lets you specify additional
     *                     route preference such as <code>CarModeOptions</code> if traveling by
     *                         <code>Car</code>, or <code>TruckModeOptions</code> if traveling by
     *                         <code>Truck</code>.</p>
     *             </li>
     *          </ul>
     *         <p>
     *             </p>
     */
    calculateRoute(args: CalculateRouteCommandInput, options?: __HttpHandlerOptions): Promise<CalculateRouteCommandOutput>;
    calculateRoute(args: CalculateRouteCommandInput, cb: (err: any, data?: CalculateRouteCommandOutput) => void): void;
    calculateRoute(args: CalculateRouteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CalculateRouteCommandOutput) => void): void;
    /**
     * <p>Creates a geofence collection, which manages and stores geofences.</p>
     */
    createGeofenceCollection(args: CreateGeofenceCollectionCommandInput, options?: __HttpHandlerOptions): Promise<CreateGeofenceCollectionCommandOutput>;
    createGeofenceCollection(args: CreateGeofenceCollectionCommandInput, cb: (err: any, data?: CreateGeofenceCollectionCommandOutput) => void): void;
    createGeofenceCollection(args: CreateGeofenceCollectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGeofenceCollectionCommandOutput) => void): void;
    /**
     * <p>Creates a map resource in your AWS account, which provides map tiles of different
     *             styles sourced from global location data providers.</p>
     */
    createMap(args: CreateMapCommandInput, options?: __HttpHandlerOptions): Promise<CreateMapCommandOutput>;
    createMap(args: CreateMapCommandInput, cb: (err: any, data?: CreateMapCommandOutput) => void): void;
    createMap(args: CreateMapCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMapCommandOutput) => void): void;
    /**
     * <p>Creates a place index resource in your AWS account, which supports functions with
     *          geospatial data sourced from your chosen data provider.</p>
     */
    createPlaceIndex(args: CreatePlaceIndexCommandInput, options?: __HttpHandlerOptions): Promise<CreatePlaceIndexCommandOutput>;
    createPlaceIndex(args: CreatePlaceIndexCommandInput, cb: (err: any, data?: CreatePlaceIndexCommandOutput) => void): void;
    createPlaceIndex(args: CreatePlaceIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePlaceIndexCommandOutput) => void): void;
    /**
     * <p>Creates a route calculator resource in your AWS account.</p>
     *         <p>You can send requests to a route calculator resource to estimate travel time,
     *             distance, and get directions. A route calculator sources traffic and road network data
     *             from your chosen data provider.</p>
     */
    createRouteCalculator(args: CreateRouteCalculatorCommandInput, options?: __HttpHandlerOptions): Promise<CreateRouteCalculatorCommandOutput>;
    createRouteCalculator(args: CreateRouteCalculatorCommandInput, cb: (err: any, data?: CreateRouteCalculatorCommandOutput) => void): void;
    createRouteCalculator(args: CreateRouteCalculatorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRouteCalculatorCommandOutput) => void): void;
    /**
     * <p>Creates a tracker resource in your AWS account, which lets you retrieve current and
     *             historical location of devices.</p>
     */
    createTracker(args: CreateTrackerCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrackerCommandOutput>;
    createTracker(args: CreateTrackerCommandInput, cb: (err: any, data?: CreateTrackerCommandOutput) => void): void;
    createTracker(args: CreateTrackerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTrackerCommandOutput) => void): void;
    /**
     * <p>Deletes a geofence collection from your AWS account.</p>
     *         <note>
     *             <p>This operation deletes the resource permanently. If the geofence collection is the
     *                 target of a tracker resource, the devices will no longer be monitored.</p>
     *         </note>
     */
    deleteGeofenceCollection(args: DeleteGeofenceCollectionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGeofenceCollectionCommandOutput>;
    deleteGeofenceCollection(args: DeleteGeofenceCollectionCommandInput, cb: (err: any, data?: DeleteGeofenceCollectionCommandOutput) => void): void;
    deleteGeofenceCollection(args: DeleteGeofenceCollectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGeofenceCollectionCommandOutput) => void): void;
    /**
     * <p>Deletes a map resource from your AWS account.</p>
     *         <note>
     *             <p>This operation deletes the resource permanently. If the map is being used in an application,
     *                 the map may not render.</p>
     *          </note>
     */
    deleteMap(args: DeleteMapCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMapCommandOutput>;
    deleteMap(args: DeleteMapCommandInput, cb: (err: any, data?: DeleteMapCommandOutput) => void): void;
    deleteMap(args: DeleteMapCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMapCommandOutput) => void): void;
    /**
     * <p>Deletes a place index resource from your AWS account.</p>
     *          <note>
     *             <p>This operation deletes the resource permanently.</p>
     *          </note>
     */
    deletePlaceIndex(args: DeletePlaceIndexCommandInput, options?: __HttpHandlerOptions): Promise<DeletePlaceIndexCommandOutput>;
    deletePlaceIndex(args: DeletePlaceIndexCommandInput, cb: (err: any, data?: DeletePlaceIndexCommandOutput) => void): void;
    deletePlaceIndex(args: DeletePlaceIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePlaceIndexCommandOutput) => void): void;
    /**
     * <p>Deletes a route calculator resource from your AWS account.</p>
     *         <note>
     *             <p>This operation deletes the resource permanently.</p>
     *          </note>
     */
    deleteRouteCalculator(args: DeleteRouteCalculatorCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRouteCalculatorCommandOutput>;
    deleteRouteCalculator(args: DeleteRouteCalculatorCommandInput, cb: (err: any, data?: DeleteRouteCalculatorCommandOutput) => void): void;
    deleteRouteCalculator(args: DeleteRouteCalculatorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRouteCalculatorCommandOutput) => void): void;
    /**
     * <p>Deletes a tracker resource from your AWS account.</p>
     *          <note>
     *             <p>This operation deletes the resource permanently. If the tracker resource is in use, you may
     *                 encounter an error. Make sure that the target resource isn't a dependency for your
     *                 applications.</p>
     *          </note>
     */
    deleteTracker(args: DeleteTrackerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrackerCommandOutput>;
    deleteTracker(args: DeleteTrackerCommandInput, cb: (err: any, data?: DeleteTrackerCommandOutput) => void): void;
    deleteTracker(args: DeleteTrackerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTrackerCommandOutput) => void): void;
    /**
     * <p>Retrieves the geofence collection details.</p>
     */
    describeGeofenceCollection(args: DescribeGeofenceCollectionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGeofenceCollectionCommandOutput>;
    describeGeofenceCollection(args: DescribeGeofenceCollectionCommandInput, cb: (err: any, data?: DescribeGeofenceCollectionCommandOutput) => void): void;
    describeGeofenceCollection(args: DescribeGeofenceCollectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeGeofenceCollectionCommandOutput) => void): void;
    /**
     * <p>Retrieves the map resource details.</p>
     */
    describeMap(args: DescribeMapCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMapCommandOutput>;
    describeMap(args: DescribeMapCommandInput, cb: (err: any, data?: DescribeMapCommandOutput) => void): void;
    describeMap(args: DescribeMapCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMapCommandOutput) => void): void;
    /**
     * <p>Retrieves the place index resource details.</p>
     */
    describePlaceIndex(args: DescribePlaceIndexCommandInput, options?: __HttpHandlerOptions): Promise<DescribePlaceIndexCommandOutput>;
    describePlaceIndex(args: DescribePlaceIndexCommandInput, cb: (err: any, data?: DescribePlaceIndexCommandOutput) => void): void;
    describePlaceIndex(args: DescribePlaceIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePlaceIndexCommandOutput) => void): void;
    /**
     * <p>Retrieves the route calculator resource details.</p>
     */
    describeRouteCalculator(args: DescribeRouteCalculatorCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRouteCalculatorCommandOutput>;
    describeRouteCalculator(args: DescribeRouteCalculatorCommandInput, cb: (err: any, data?: DescribeRouteCalculatorCommandOutput) => void): void;
    describeRouteCalculator(args: DescribeRouteCalculatorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRouteCalculatorCommandOutput) => void): void;
    /**
     * <p>Retrieves the tracker resource details.</p>
     */
    describeTracker(args: DescribeTrackerCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrackerCommandOutput>;
    describeTracker(args: DescribeTrackerCommandInput, cb: (err: any, data?: DescribeTrackerCommandOutput) => void): void;
    describeTracker(args: DescribeTrackerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrackerCommandOutput) => void): void;
    /**
     * <p>Removes the association between a tracker resource and a geofence collection.</p>
     *         <note>
     *             <p>Once you unlink a tracker resource from a geofence collection, the tracker
     *                 positions will no longer be automatically evaluated against geofences.</p>
     *         </note>
     */
    disassociateTrackerConsumer(args: DisassociateTrackerConsumerCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateTrackerConsumerCommandOutput>;
    disassociateTrackerConsumer(args: DisassociateTrackerConsumerCommandInput, cb: (err: any, data?: DisassociateTrackerConsumerCommandOutput) => void): void;
    disassociateTrackerConsumer(args: DisassociateTrackerConsumerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateTrackerConsumerCommandOutput) => void): void;
    /**
     * <p>Retrieves a device's most recent position according to its sample time.</p>
     *          <note>
     *             <p>Device positions are deleted after 30 days.</p>
     *          </note>
     */
    getDevicePosition(args: GetDevicePositionCommandInput, options?: __HttpHandlerOptions): Promise<GetDevicePositionCommandOutput>;
    getDevicePosition(args: GetDevicePositionCommandInput, cb: (err: any, data?: GetDevicePositionCommandOutput) => void): void;
    getDevicePosition(args: GetDevicePositionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDevicePositionCommandOutput) => void): void;
    /**
     * <p>Retrieves the device position history from a tracker resource within a specified range
     *             of time.</p>
     *          <note>
     *            <p>Device positions are deleted after 30 days.</p>
     *          </note>
     */
    getDevicePositionHistory(args: GetDevicePositionHistoryCommandInput, options?: __HttpHandlerOptions): Promise<GetDevicePositionHistoryCommandOutput>;
    getDevicePositionHistory(args: GetDevicePositionHistoryCommandInput, cb: (err: any, data?: GetDevicePositionHistoryCommandOutput) => void): void;
    getDevicePositionHistory(args: GetDevicePositionHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDevicePositionHistoryCommandOutput) => void): void;
    /**
     * <p>Retrieves the geofence details from a geofence collection.</p>
     */
    getGeofence(args: GetGeofenceCommandInput, options?: __HttpHandlerOptions): Promise<GetGeofenceCommandOutput>;
    getGeofence(args: GetGeofenceCommandInput, cb: (err: any, data?: GetGeofenceCommandOutput) => void): void;
    getGeofence(args: GetGeofenceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGeofenceCommandOutput) => void): void;
    /**
     * <p>Retrieves glyphs used to display labels on a map.</p>
     */
    getMapGlyphs(args: GetMapGlyphsCommandInput, options?: __HttpHandlerOptions): Promise<GetMapGlyphsCommandOutput>;
    getMapGlyphs(args: GetMapGlyphsCommandInput, cb: (err: any, data?: GetMapGlyphsCommandOutput) => void): void;
    getMapGlyphs(args: GetMapGlyphsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMapGlyphsCommandOutput) => void): void;
    /**
     * <p>Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG
     *             image paired with a JSON document describing the offsets of individual icons that will
     *             be displayed on a rendered map.</p>
     */
    getMapSprites(args: GetMapSpritesCommandInput, options?: __HttpHandlerOptions): Promise<GetMapSpritesCommandOutput>;
    getMapSprites(args: GetMapSpritesCommandInput, cb: (err: any, data?: GetMapSpritesCommandOutput) => void): void;
    getMapSprites(args: GetMapSpritesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMapSpritesCommandOutput) => void): void;
    /**
     * <p>Retrieves the map style descriptor from a map resource. </p>
     *         <p>The style descriptor contains speciﬁcations on how features render on a map. For
     *             example, what data to display, what order to display the data in, and the style for the
     *             data. Style descriptors follow the Mapbox Style Specification.</p>
     */
    getMapStyleDescriptor(args: GetMapStyleDescriptorCommandInput, options?: __HttpHandlerOptions): Promise<GetMapStyleDescriptorCommandOutput>;
    getMapStyleDescriptor(args: GetMapStyleDescriptorCommandInput, cb: (err: any, data?: GetMapStyleDescriptorCommandOutput) => void): void;
    getMapStyleDescriptor(args: GetMapStyleDescriptorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMapStyleDescriptorCommandOutput) => void): void;
    /**
     * <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to
     *             render a map. they're addressed using a grid arrangement with an X coordinate, Y
     *             coordinate, and Z (zoom) level. </p>
     *         <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles
     *             both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0)
     *             will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
     */
    getMapTile(args: GetMapTileCommandInput, options?: __HttpHandlerOptions): Promise<GetMapTileCommandOutput>;
    getMapTile(args: GetMapTileCommandInput, cb: (err: any, data?: GetMapTileCommandOutput) => void): void;
    getMapTile(args: GetMapTileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMapTileCommandOutput) => void): void;
    /**
     * <p>Lists the latest device positions for requested devices.</p>
     */
    listDevicePositions(args: ListDevicePositionsCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicePositionsCommandOutput>;
    listDevicePositions(args: ListDevicePositionsCommandInput, cb: (err: any, data?: ListDevicePositionsCommandOutput) => void): void;
    listDevicePositions(args: ListDevicePositionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDevicePositionsCommandOutput) => void): void;
    /**
     * <p>Lists geofence collections in your AWS account.</p>
     */
    listGeofenceCollections(args: ListGeofenceCollectionsCommandInput, options?: __HttpHandlerOptions): Promise<ListGeofenceCollectionsCommandOutput>;
    listGeofenceCollections(args: ListGeofenceCollectionsCommandInput, cb: (err: any, data?: ListGeofenceCollectionsCommandOutput) => void): void;
    listGeofenceCollections(args: ListGeofenceCollectionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGeofenceCollectionsCommandOutput) => void): void;
    /**
     * <p>Lists geofences stored in a given geofence collection.</p>
     */
    listGeofences(args: ListGeofencesCommandInput, options?: __HttpHandlerOptions): Promise<ListGeofencesCommandOutput>;
    listGeofences(args: ListGeofencesCommandInput, cb: (err: any, data?: ListGeofencesCommandOutput) => void): void;
    listGeofences(args: ListGeofencesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGeofencesCommandOutput) => void): void;
    /**
     * <p>Lists map resources in your AWS account.</p>
     */
    listMaps(args: ListMapsCommandInput, options?: __HttpHandlerOptions): Promise<ListMapsCommandOutput>;
    listMaps(args: ListMapsCommandInput, cb: (err: any, data?: ListMapsCommandOutput) => void): void;
    listMaps(args: ListMapsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMapsCommandOutput) => void): void;
    /**
     * <p>Lists place index resources in your AWS account.</p>
     */
    listPlaceIndexes(args: ListPlaceIndexesCommandInput, options?: __HttpHandlerOptions): Promise<ListPlaceIndexesCommandOutput>;
    listPlaceIndexes(args: ListPlaceIndexesCommandInput, cb: (err: any, data?: ListPlaceIndexesCommandOutput) => void): void;
    listPlaceIndexes(args: ListPlaceIndexesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPlaceIndexesCommandOutput) => void): void;
    /**
     * <p>Lists route calculator resources in your AWS account.</p>
     */
    listRouteCalculators(args: ListRouteCalculatorsCommandInput, options?: __HttpHandlerOptions): Promise<ListRouteCalculatorsCommandOutput>;
    listRouteCalculators(args: ListRouteCalculatorsCommandInput, cb: (err: any, data?: ListRouteCalculatorsCommandOutput) => void): void;
    listRouteCalculators(args: ListRouteCalculatorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRouteCalculatorsCommandOutput) => void): void;
    /**
     * <p>Returns the tags for the specified Amazon Location Service resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists geofence collections currently associated to the given tracker resource.</p>
     */
    listTrackerConsumers(args: ListTrackerConsumersCommandInput, options?: __HttpHandlerOptions): Promise<ListTrackerConsumersCommandOutput>;
    listTrackerConsumers(args: ListTrackerConsumersCommandInput, cb: (err: any, data?: ListTrackerConsumersCommandOutput) => void): void;
    listTrackerConsumers(args: ListTrackerConsumersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTrackerConsumersCommandOutput) => void): void;
    /**
     * <p>Lists tracker resources in your AWS account.</p>
     */
    listTrackers(args: ListTrackersCommandInput, options?: __HttpHandlerOptions): Promise<ListTrackersCommandOutput>;
    listTrackers(args: ListTrackersCommandInput, cb: (err: any, data?: ListTrackersCommandOutput) => void): void;
    listTrackers(args: ListTrackersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTrackersCommandOutput) => void): void;
    /**
     * <p>Stores a geofence geometry in a given geofence collection, or updates the geometry of
     *             an existing geofence if a geofence ID is included in the request. </p>
     */
    putGeofence(args: PutGeofenceCommandInput, options?: __HttpHandlerOptions): Promise<PutGeofenceCommandOutput>;
    putGeofence(args: PutGeofenceCommandInput, cb: (err: any, data?: PutGeofenceCommandOutput) => void): void;
    putGeofence(args: PutGeofenceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutGeofenceCommandOutput) => void): void;
    /**
     * <p>Reverse geocodes a given coordinate and returns a legible address. Allows you to search
     *          for Places or points of interest near a given position.</p>
     */
    searchPlaceIndexForPosition(args: SearchPlaceIndexForPositionCommandInput, options?: __HttpHandlerOptions): Promise<SearchPlaceIndexForPositionCommandOutput>;
    searchPlaceIndexForPosition(args: SearchPlaceIndexForPositionCommandInput, cb: (err: any, data?: SearchPlaceIndexForPositionCommandOutput) => void): void;
    searchPlaceIndexForPosition(args: SearchPlaceIndexForPositionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchPlaceIndexForPositionCommandOutput) => void): void;
    /**
     * <p>Geocodes free-form text, such as an address, name, city, or region to allow you to
     *          search for Places or points of interest. </p>
     *          <p>Includes the option to apply additional parameters to narrow your list of
     *          results.</p>
     *          <note>
     *             <p>You can search for places near a given position using <code>BiasPosition</code>, or
     *             filter results within a bounding box using <code>FilterBBox</code>. Providing both
     *             parameters simultaneously returns an error.</p>
     *          </note>
     */
    searchPlaceIndexForText(args: SearchPlaceIndexForTextCommandInput, options?: __HttpHandlerOptions): Promise<SearchPlaceIndexForTextCommandOutput>;
    searchPlaceIndexForText(args: SearchPlaceIndexForTextCommandInput, cb: (err: any, data?: SearchPlaceIndexForTextCommandOutput) => void): void;
    searchPlaceIndexForText(args: SearchPlaceIndexForTextCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchPlaceIndexForTextCommandOutput) => void): void;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the specified Amazon
     *             Location Service resource.</p>
     *
     *         <p>Tags can help you organize and categorize your resources.
     *             You can also use them to scope user permissions, by granting a user
     *             permission to access or change only resources with certain tag values.</p>
     *
     *         <p>Tags don't have any semantic meaning to AWS and are interpreted
     *             strictly as strings of characters.</p>
     *
     *         <p>You can use the <code>TagResource</code> action with an Amazon
     *             Location Service resource that already has tags. If you specify a new
     *             tag key for the resource, this tag is appended to the tags already
     *             associated with the resource. If you specify a tag key that is already
     *             associated with the resource, the new tag value that you specify replaces
     *             the previous value for that tag.
     *         </p>
     *
     *         <p>You can associate as many as 50 tags with a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from the specified Amazon Location Service resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
