import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>The request was denied due to insufficient access or permission. Check with an
 *       administrator to verify your permissions.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    Message: string | undefined;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export interface AssociateTrackerConsumerRequest {
    /**
     * <p>The name of the tracker resource to be associated with a geofence collection.</p>
     */
    TrackerName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker
     *             resource. Used when you need to specify a resource across all AWS.</p>
     *          <ul>
     *             <li>
     *                <p>Format example:
     *                         <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    ConsumerArn: string | undefined;
}
export declare namespace AssociateTrackerConsumerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateTrackerConsumerRequest) => any;
}
export interface AssociateTrackerConsumerResponse {
}
export declare namespace AssociateTrackerConsumerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateTrackerConsumerResponse) => any;
}
/**
 * <p>The request was unsuccessful due to a conflict.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    Message: string | undefined;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    $retryable: {};
    Message: string | undefined;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>The resource that you've entered was not found in your AWS account.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message: string | undefined;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    $retryable: {};
    Message: string | undefined;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
/**
 * <p>The input failed to meet the constraints specified by the AWS service in a specified
 *       field. </p>
 */
export interface ValidationExceptionField {
    /**
     * <p>The field name where the invalid entry was detected.</p>
     */
    Name: string | undefined;
    /**
     * <p>A message with the reason for the validation exception error.</p>
     */
    Message: string | undefined;
}
export declare namespace ValidationExceptionField {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationExceptionField) => any;
}
export declare type ValidationExceptionReason = "CannotParse" | "FieldValidationFailed" | "Missing" | "Other" | "UnknownOperation";
/**
 * <p>The input failed to meet the constraints specified by the AWS service. </p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    Message: string | undefined;
    /**
     * <p>A message with the reason for the validation exception error.</p>
     */
    Reason: ValidationExceptionReason | string | undefined;
    /**
     * <p>The field where the invalid entry was detected.</p>
     */
    FieldList: ValidationExceptionField[] | undefined;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export interface BatchDeleteDevicePositionHistoryRequest {
    /**
     * <p>The name of the tracker resource to delete the device position history from.</p>
     */
    TrackerName: string | undefined;
    /**
     * <p>Devices whose position history you want to delete.</p>
     *          <ul>
     *             <li>
     *                <p>For example, for two devices:
     *                    <code>“DeviceIds” : [DeviceId1,DeviceId2]</code>
     *                </p>
     *            </li>
     *          </ul>
     */
    DeviceIds: string[] | undefined;
}
export declare namespace BatchDeleteDevicePositionHistoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchDeleteDevicePositionHistoryRequest) => any;
}
export declare type BatchItemErrorCode = "AccessDeniedError" | "ConflictError" | "InternalServerError" | "ResourceNotFoundError" | "ThrottlingError" | "ValidationError";
/**
 * <p>Contains the batch request error details associated with the request.</p>
 */
export interface BatchItemError {
    /**
     * <p>The error code associated with the batch request error.</p>
     */
    Code?: BatchItemErrorCode | string;
    /**
     * <p>A message with the reason for the batch request error.</p>
     */
    Message?: string;
}
export declare namespace BatchItemError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchItemError) => any;
}
/**
 * <p>Contains the tracker resource details.</p>
 */
export interface BatchDeleteDevicePositionHistoryError {
    /**
     * <p>The ID of the device for this position.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>Contains the batch request error details associated with the request.</p>
     */
    Error: BatchItemError | undefined;
}
export declare namespace BatchDeleteDevicePositionHistoryError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchDeleteDevicePositionHistoryError) => any;
}
export interface BatchDeleteDevicePositionHistoryResponse {
    /**
     * <p>Contains error details for each device history that failed to delete.</p>
     */
    Errors: BatchDeleteDevicePositionHistoryError[] | undefined;
}
export declare namespace BatchDeleteDevicePositionHistoryResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchDeleteDevicePositionHistoryResponse) => any;
}
export interface BatchDeleteGeofenceRequest {
    /**
     * <p>The geofence collection storing the geofences to be deleted.</p>
     */
    CollectionName: string | undefined;
    /**
     * <p>The batch of geofences to be deleted.</p>
     */
    GeofenceIds: string[] | undefined;
}
export declare namespace BatchDeleteGeofenceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchDeleteGeofenceRequest) => any;
}
/**
 * <p>Contains error details for each geofence that failed to delete from the geofence
 *             collection.</p>
 */
export interface BatchDeleteGeofenceError {
    /**
     * <p>The geofence associated with the error message.</p>
     */
    GeofenceId: string | undefined;
    /**
     * <p>Contains details associated to the batch error.</p>
     */
    Error: BatchItemError | undefined;
}
export declare namespace BatchDeleteGeofenceError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchDeleteGeofenceError) => any;
}
export interface BatchDeleteGeofenceResponse {
    /**
     * <p>Contains error details for each geofence that failed to delete.</p>
     */
    Errors: BatchDeleteGeofenceError[] | undefined;
}
export declare namespace BatchDeleteGeofenceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchDeleteGeofenceResponse) => any;
}
/**
 * <p>Contains the position update details for a device.</p>
 */
export interface DevicePositionUpdate {
    /**
     * <p>The device associated to the position update.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>The timestamp at which the device's position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    SampleTime: Date | undefined;
    /**
     * <p>The latest device position defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format:
     *                 <code>[X or longitude, Y or latitude]</code>.</p>
     */
    Position: number[] | undefined;
}
export declare namespace DevicePositionUpdate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DevicePositionUpdate) => any;
}
export interface BatchEvaluateGeofencesRequest {
    /**
     * <p>The geofence collection used in evaluating the position of devices against its
     *             geofences.</p>
     */
    CollectionName: string | undefined;
    /**
     * <p>Contains device details for each device to be evaluated against the given geofence
     *             collection.</p>
     */
    DevicePositionUpdates: DevicePositionUpdate[] | undefined;
}
export declare namespace BatchEvaluateGeofencesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchEvaluateGeofencesRequest) => any;
}
/**
 * <p>Contains error details for each device that failed to evaluate its position against
 *             the geofences in a given geofence collection.</p>
 */
export interface BatchEvaluateGeofencesError {
    /**
     * <p>The device associated with the position evaluation error.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>Specifies a timestamp for when the error occurred in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    SampleTime: Date | undefined;
    /**
     * <p>Contains details associated to the batch error.</p>
     */
    Error: BatchItemError | undefined;
}
export declare namespace BatchEvaluateGeofencesError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchEvaluateGeofencesError) => any;
}
export interface BatchEvaluateGeofencesResponse {
    /**
     * <p>Contains error details for each device that failed to evaluate its position against
     *             the given geofence collection.</p>
     */
    Errors: BatchEvaluateGeofencesError[] | undefined;
}
export declare namespace BatchEvaluateGeofencesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchEvaluateGeofencesResponse) => any;
}
export interface BatchGetDevicePositionRequest {
    /**
     * <p>The tracker resource retrieving the device position.</p>
     */
    TrackerName: string | undefined;
    /**
     * <p>Devices whose position you want to retrieve.</p>
     *          <ul>
     *             <li>
     *                <p>For example, for two devices:
     *                    <code>device-ids=DeviceId1&amp;device-ids=DeviceId2</code>
     *                </p>
     *            </li>
     *          </ul>
     */
    DeviceIds: string[] | undefined;
}
export declare namespace BatchGetDevicePositionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchGetDevicePositionRequest) => any;
}
/**
 * <p>Contains the device position details.</p>
 */
export interface DevicePosition {
    /**
     * <p>The device whose position you retrieved.</p>
     */
    DeviceId?: string;
    /**
     * <p>The timestamp at which the device's position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    SampleTime: Date | undefined;
    /**
     * <p>The timestamp for when the tracker resource received the device position in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    ReceivedTime: Date | undefined;
    /**
     * <p>The last known device position.</p>
     */
    Position: number[] | undefined;
}
export declare namespace DevicePosition {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DevicePosition) => any;
}
/**
 * <p>Contains error details for each device that didn't return a position.</p>
 */
export interface BatchGetDevicePositionError {
    /**
     * <p>The ID of the device that didn't return a position.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>Contains details related to the error code.</p>
     */
    Error: BatchItemError | undefined;
}
export declare namespace BatchGetDevicePositionError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchGetDevicePositionError) => any;
}
export interface BatchGetDevicePositionResponse {
    /**
     * <p>Contains  error details for each device that failed to send its position to the tracker
     *             resource.</p>
     */
    Errors: BatchGetDevicePositionError[] | undefined;
    /**
     * <p>Contains device position details such as the device ID, position, and timestamps for
     *             when the position was received and sampled.</p>
     */
    DevicePositions: DevicePosition[] | undefined;
}
export declare namespace BatchGetDevicePositionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchGetDevicePositionResponse) => any;
}
/**
 * <p>Contains the geofence geometry details.</p>
 *         <note>
 *             <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons
 *                 that are wound clockwise, or that cross the antimeridian. </p>
 *         </note>
 */
export interface GeofenceGeometry {
    /**
     * <p>An array of 1 or more linear rings. A linear ring is an array of 4 or more vertices,
     *             where the first and last vertex are the same to form a closed boundary. Each vertex is a
     *             2-dimensional point of the form: <code>[longitude, latitude]</code>. </p>
     *         <p>The first linear ring is an outer ring, describing the polygon's boundary. Subsequent
     *             linear rings may be inner or outer rings to describe holes and islands. Outer rings must
     *             list their vertices in counter-clockwise order around the ring's center, where the left
     *             side is the polygon's exterior. Inner rings must list their vertices in clockwise order,
     *             where the left side is the polygon's interior.</p>
     */
    Polygon?: number[][][];
}
export declare namespace GeofenceGeometry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GeofenceGeometry) => any;
}
/**
 * <p>Contains geofence geometry details. </p>
 */
export interface BatchPutGeofenceRequestEntry {
    /**
     * <p>The identifier for the geofence to be stored in a given geofence collection.</p>
     */
    GeofenceId: string | undefined;
    /**
     * <p>Contains the polygon details to specify the position of the geofence.</p>
     *         <note>
     *             <p>Each <a href="https://docs.aws.amazon.com/location-geofences/latest/APIReference/API_GeofenceGeometry.html">geofence polygon</a> can have a maximum of 1,000 vertices.</p>
     *         </note>
     */
    Geometry: GeofenceGeometry | undefined;
}
export declare namespace BatchPutGeofenceRequestEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchPutGeofenceRequestEntry) => any;
}
export interface BatchPutGeofenceRequest {
    /**
     * <p>The geofence collection storing the geofences.</p>
     */
    CollectionName: string | undefined;
    /**
     * <p>The batch of geofences to be stored in a geofence collection.</p>
     */
    Entries: BatchPutGeofenceRequestEntry[] | undefined;
}
export declare namespace BatchPutGeofenceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchPutGeofenceRequest) => any;
}
/**
 * <p>Contains error details for each geofence that failed to be stored in a given geofence
 *             collection.</p>
 */
export interface BatchPutGeofenceError {
    /**
     * <p>The geofence associated with the error message.</p>
     */
    GeofenceId: string | undefined;
    /**
     * <p>Contains details associated to the batch error.</p>
     */
    Error: BatchItemError | undefined;
}
export declare namespace BatchPutGeofenceError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchPutGeofenceError) => any;
}
/**
 * <p>Contains a summary of each geofence that was successfully stored in a given geofence
 *             collection.</p>
 */
export interface BatchPutGeofenceSuccess {
    /**
     * <p>The geofence successfully stored in a geofence collection.</p>
     */
    GeofenceId: string | undefined;
    /**
     * <p>The timestamp for when the geofence was stored in a geofence collection in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp for when the geofence was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    UpdateTime: Date | undefined;
}
export declare namespace BatchPutGeofenceSuccess {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchPutGeofenceSuccess) => any;
}
export interface BatchPutGeofenceResponse {
    /**
     * <p>Contains each geofence that was successfully stored in a geofence collection.</p>
     */
    Successes: BatchPutGeofenceSuccess[] | undefined;
    /**
     * <p>Contains additional error details for each geofence that failed to be stored in a
     *             geofence collection.</p>
     */
    Errors: BatchPutGeofenceError[] | undefined;
}
export declare namespace BatchPutGeofenceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchPutGeofenceResponse) => any;
}
export interface BatchUpdateDevicePositionRequest {
    /**
     * <p>The name of the tracker resource to update.</p>
     */
    TrackerName: string | undefined;
    /**
     * <p>Contains the position update details for each device.</p>
     */
    Updates: DevicePositionUpdate[] | undefined;
}
export declare namespace BatchUpdateDevicePositionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchUpdateDevicePositionRequest) => any;
}
/**
 * <p>Contains  error details for each device that failed to update its position.</p>
 */
export interface BatchUpdateDevicePositionError {
    /**
     * <p>The device associated with the failed location update.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>The timestamp at which the device position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    SampleTime: Date | undefined;
    /**
     * <p>Contains details related to the error code such as the error code and error
     *             message.</p>
     */
    Error: BatchItemError | undefined;
}
export declare namespace BatchUpdateDevicePositionError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchUpdateDevicePositionError) => any;
}
export interface BatchUpdateDevicePositionResponse {
    /**
     * <p>Contains  error details for each device that failed to update its position.</p>
     */
    Errors: BatchUpdateDevicePositionError[] | undefined;
}
export declare namespace BatchUpdateDevicePositionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchUpdateDevicePositionResponse) => any;
}
/**
 * <p>Contains details about additional route preferences for requests that specify
 *                 <code>TravelMode</code> as <code>Car</code>.</p>
 */
export interface CalculateRouteCarModeOptions {
    /**
     * <p>Avoids ferries when calculating routes.</p>
     *         <p>Default Value: <code>false</code>
     *          </p>
     *         <p>Valid Values: <code>false</code> | <code>true</code>
     *          </p>
     */
    AvoidFerries?: boolean;
    /**
     * <p>Avoids tolls when calculating routes.</p>
     *         <p>Default Value: <code>false</code>
     *          </p>
     *         <p>Valid Values: <code>false</code> | <code>true</code>
     *          </p>
     */
    AvoidTolls?: boolean;
}
export declare namespace CalculateRouteCarModeOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CalculateRouteCarModeOptions) => any;
}
export declare type DistanceUnit = "Kilometers" | "Miles";
export declare type TravelMode = "Car" | "Truck" | "Walking";
export declare type DimensionUnit = "Feet" | "Meters";
/**
 * <p>Contains details about the truck dimensions in the unit of measurement that you
 *             specify. Used to filter out roads that can't support or allow the specified dimensions
 *             for requests that specify <code>TravelMode</code> as <code>Truck</code>.</p>
 */
export interface TruckDimensions {
    /**
     * <p>The length of the truck.</p>
     *         <ul>
     *             <li>
     *                 <p>For example, <code>15.5</code>.</p>
     *             </li>
     *          </ul>
     */
    Length?: number;
    /**
     * <p>The height of the truck.</p>
     *         <ul>
     *             <li>
     *                 <p>For example, <code>4.5</code>.</p>
     *             </li>
     *          </ul>
     */
    Height?: number;
    /**
     * <p>The width of the truck.</p>
     *         <ul>
     *             <li>
     *                 <p>For example, <code>4.5</code>.</p>
     *             </li>
     *          </ul>
     */
    Width?: number;
    /**
     * <p> Specifies the unit of measurement for the truck dimensions.</p>
     *         <p>Default Value: <code>Meters</code>
     *          </p>
     */
    Unit?: DimensionUnit | string;
}
export declare namespace TruckDimensions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TruckDimensions) => any;
}
export declare type VehicleWeightUnit = "Kilograms" | "Pounds";
/**
 * <p>Contains details about the truck's weight specifications. Used to avoid roads that
 *             can't support or allow the total weight for requests that specify
 *                 <code>TravelMode</code> as <code>Truck</code>.</p>
 */
export interface TruckWeight {
    /**
     * <p>The total weight of the truck. </p>
     *         <ul>
     *             <li>
     *                 <p>For example, <code>3500</code>.</p>
     *             </li>
     *          </ul>
     */
    Total?: number;
    /**
     * <p>The unit of measurement to use for the truck weight.</p>
     *         <p>Default Value: <code>Kilograms</code>
     *          </p>
     */
    Unit?: VehicleWeightUnit | string;
}
export declare namespace TruckWeight {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TruckWeight) => any;
}
/**
 * <p>Contains details about additional route preferences for requests that specify
 *                 <code>TravelMode</code> as <code>Truck</code>.</p>
 */
export interface CalculateRouteTruckModeOptions {
    /**
     * <p>Avoids ferries when calculating routes.</p>
     *         <p>Default Value: <code>false</code>
     *          </p>
     *         <p>Valid Values: <code>false</code> | <code>true</code>
     *          </p>
     */
    AvoidFerries?: boolean;
    /**
     * <p>Avoids ferries when calculating routes.</p>
     *         <p>Default Value: <code>false</code>
     *          </p>
     *         <p>Valid Values: <code>false</code> | <code>true</code>
     *          </p>
     */
    AvoidTolls?: boolean;
    /**
     * <p>Specifies the truck's dimension specifications including length, height, width, and
     *             unit of measurement. Used to avoid roads that can't support the truck's
     *             dimensions.</p>
     */
    Dimensions?: TruckDimensions;
    /**
     * <p>Specifies the truck's weight specifications including total weight and unit of
     *             measurement. Used to avoid roads that can't support the truck's weight.</p>
     */
    Weight?: TruckWeight;
}
export declare namespace CalculateRouteTruckModeOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CalculateRouteTruckModeOptions) => any;
}
export interface CalculateRouteRequest {
    /**
     * <p>The name of the route calculator resource that you want to use to calculate a route. </p>
     */
    CalculatorName: string | undefined;
    /**
     * <p>The start position for the route. Defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format:
     *                 <code>[longitude, latitude]</code>.</p>
     *         <ul>
     *             <li>
     *                 <p>For example, <code>[-123.115, 49.285]</code>
     *                </p>
     *             </li>
     *          </ul>
     *         <note>
     *             <p>If you specify a departure that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#snap-to-nearby-road">moves the
     *                 position to the nearest road</a>.</p>
     *         </note>
     *         <p>Valid Values: <code>[-180 to 180,-90 to 90]</code>
     *          </p>
     */
    DeparturePosition: number[] | undefined;
    /**
     * <p>The finish position for the route. Defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format:
     *                 <code>[longitude, latitude]</code>.</p>
     *         <ul>
     *             <li>
     *                 <p> For example, <code>[-122.339, 47.615]</code>
     *                </p>
     *             </li>
     *          </ul>
     *         <note>
     *             <p>If you specify a destination that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#snap-to-nearby-road">moves the position to the nearest road</a>. </p>
     *         </note>
     *         <p>Valid Values: <code>[-180 to 180,-90 to 90]</code>
     *          </p>
     */
    DestinationPosition: number[] | undefined;
    /**
     * <p>Specifies an ordered list of up to 23 intermediate positions to include along a route
     *             between the departure position and destination position. </p>
     *         <ul>
     *             <li>
     *                 <p>For example, from the <code>DeparturePosition</code>
     *                     <code>[-123.115, 49.285]</code>, the route follows the order that the waypoint
     *                     positions are given <code>[[-122.757, 49.0021],[-122.349, 47.620]]</code>
     *                </p>
     *             </li>
     *          </ul>
     *         <note>
     *             <p>If you specify a waypoint position that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#snap-to-nearby-road">moves the position to the nearest road</a>. </p>
     *             <p>Specifying more than 23 waypoints returns a <code>400 ValidationException</code>
     *                 error.</p>
     *         </note>
     *         <p>Valid Values: <code>[-180 to 180,-90 to 90]</code>
     *          </p>
     */
    WaypointPositions?: number[][];
    /**
     * <p>Specifies the mode of transport when calculating a route. Used in estimating the speed
     *             of travel and road compatibility.</p>
     *         <p>The <code>TravelMode</code> you specify determines how you specify route preferences: </p>
     *         <ul>
     *             <li>
     *                 <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code>
     *                     parameter.</p>
     *             </li>
     *             <li>
     *                 <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code>
     *                     parameter.</p>
     *             </li>
     *          </ul>
     *         <p>Default Value: <code>Car</code>
     *          </p>
     */
    TravelMode?: TravelMode | string;
    /**
     * <p>Specifies the desired time of departure. Uses the given time to calculate a route.
     *             Otherwise, the best time of day to travel with the best traffic conditions is used to
     *             calculate the route.</p>
     *         <note>
     *             <p>Setting a departure time in the past returns a <code>400
     *                     ValidationException</code> error.</p>
     *         </note>
     *         <ul>
     *             <li>
     *                 <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO
     *                         8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example,
     *                         <code>2020–07-2T12:15:20.000Z+01:00</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    DepartureTime?: Date;
    /**
     * <p>Sets the time of departure as the current time. Uses the current time to calculate a
     *             route. Otherwise, the best time of day to travel with the best traffic conditions is
     *             used to calculate the route.</p>
     *         <p>Default Value: <code>false</code>
     *          </p>
     *         <p>Valid Values: <code>false</code> | <code>true</code>
     *          </p>
     */
    DepartNow?: boolean;
    /**
     * <p>Set the unit system to specify the distance.</p>
     *         <p>Default Value: <code>Kilometers</code>
     *          </p>
     */
    DistanceUnit?: DistanceUnit | string;
    /**
     * <p>Set to include the geometry details in the result for each path between a pair of
     *             positions.</p>
     *         <p>Default Value: <code>false</code>
     *          </p>
     *         <p>Valid Values: <code>false</code> | <code>true</code>
     *          </p>
     */
    IncludeLegGeometry?: boolean;
    /**
     * <p>Specifies route preferences when traveling by <code>Car</code>, such as avoiding
     *             routes that use ferries or tolls.</p>
     *         <p>Requirements: <code>TravelMode</code> must be specified as <code>Car</code>.</p>
     */
    CarModeOptions?: CalculateRouteCarModeOptions;
    /**
     * <p>Specifies route preferences when traveling by <code>Truck</code>, such as avoiding
     *             routes that use ferries or tolls, and truck specifications to consider when choosing an
     *             optimal road.</p>
     *         <p>Requirements: <code>TravelMode</code> must be specified as <code>Truck</code>.</p>
     */
    TruckModeOptions?: CalculateRouteTruckModeOptions;
}
export declare namespace CalculateRouteRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CalculateRouteRequest) => any;
}
/**
 * <p>Contains the geometry details for each path between a pair of positions. Used in
 *             plotting a route leg on a map.</p>
 */
export interface LegGeometry {
    /**
     * <p>An ordered list of positions used to plot a route on a map. </p>
     *         <p>The first position is closest to the start position for the leg, and the last position
     *             is the closest to the end position for the leg.</p>
     *         <ul>
     *             <li>
     *                 <p>For example, <code>[[-123.117, 49.284],[-123.115, 49.285],[-123.115,
     *                         49.285]]</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    LineString?: number[][];
}
export declare namespace LegGeometry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LegGeometry) => any;
}
/**
 * <p> Represents an element of a leg within a route. A step contains instructions for how
 *             to move to the next step in the leg. </p>
 */
export interface Step {
    /**
     * <p>The starting position of a step. If the position is the first step in the leg, this
     *             position is the same as the start position of the leg.</p>
     */
    StartPosition: number[] | undefined;
    /**
     * <p>The end position of a step. If the position the last step in the leg, this position is
     *             the same as the end position of the leg.</p>
     */
    EndPosition: number[] | undefined;
    /**
     * <p>The travel distance between the step's <code>StartPosition</code> and
     *                 <code>EndPosition</code>.</p>
     */
    Distance: number | undefined;
    /**
     * <p>The estimated travel time, in seconds, from the step's <code>StartPosition</code> to
     *             the <code>EndPosition</code>. . The travel mode and departure time that you specify in
     *             the request determines the calculated time.</p>
     */
    DurationSeconds: number | undefined;
    /**
     * <p>Represents the start position, or index, in a sequence of steps within the leg's line
     *             string geometry. For example, the index of the first step in a leg geometry is
     *                 <code>0</code>. </p>
     *         <p>Included in the response for queries that set <code>IncludeLegGeometry</code> to
     *                 <code>True</code>. </p>
     */
    GeometryOffset?: number;
}
export declare namespace Step {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Step) => any;
}
/**
 * <p>Contains the calculated route's details for each path between a pair of positions. The
 *             number of legs returned corresponds to one less than the total number of positions in
 *             the request. </p>
 *         <p>For example, a route with a departure position and destination position returns one
 *             leg with the positions <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#snap-to-nearby-road">snapped to a nearby road</a>:</p>
 *         <ul>
 *             <li>
 *                 <p>The <code>StartPosition</code> is the departure position.</p>
 *             </li>
 *             <li>
 *                 <p>The <code>EndPosition</code> is the destination position.</p>
 *             </li>
 *          </ul>
 *         <p>A route with a waypoint between the departure and destination position returns two
 *             legs with the positions snapped to a nearby road.:</p>
 *         <ul>
 *             <li>
 *                 <p>Leg 1: The <code>StartPosition</code> is the departure position . The
 *                         <code>EndPosition</code> is the waypoint positon.</p>
 *             </li>
 *             <li>
 *                 <p>Leg 2: The <code>StartPosition</code> is the waypoint position. The
 *                         <code>EndPosition</code> is the destination position.</p>
 *             </li>
 *          </ul>
 */
export interface Leg {
    /**
     * <p>The starting position of the leg. Follows the format
     *             <code>[longitude,latitude]</code>.</p>
     *         <note>
     *             <p>If the <code>StartPosition</code> isn't located on a road, it's <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#snap-to-nearby-road">snapped to a nearby road</a>. </p>
     *         </note>
     */
    StartPosition: number[] | undefined;
    /**
     * <p>The terminating position of the leg. Follows the format
     *                 <code>[longitude,latitude]</code>.</p>
     *         <note>
     *             <p>If the <code>EndPosition</code> isn't located on a road, it's <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#snap-to-nearby-road">snapped to a nearby road</a>. </p>
     *         </note>
     */
    EndPosition: number[] | undefined;
    /**
     * <p>The distance between the leg's <code>StartPosition</code> and <code>EndPosition</code>
     *             along a calculated route. </p>
     *         <ul>
     *             <li>
     *                 <p>The default measurement is <code>Kilometers</code> unless the request
     *                     specifies a <code>DistanceUnit</code> of <code>Miles</code>.</p>
     *             </li>
     *          </ul>
     */
    Distance: number | undefined;
    /**
     * <p>The estimated travel time between the leg's <code>StartPosition</code> and
     *                 <code>EndPosition</code>. The travel mode and departure time that you specify in the
     *             request determines the calculated time.</p>
     */
    DurationSeconds: number | undefined;
    /**
     * <p>Contains the calculated route's path as a linestring geometry.</p>
     */
    Geometry?: LegGeometry;
    /**
     * <p>Contains a list of steps, which represent subsections of a leg. Each step provides
     *             instructions for how to move to the next step in the leg such as the step's start
     *             position, end position, travel distance, travel duration, and geometry offset.</p>
     */
    Steps: Step[] | undefined;
}
export declare namespace Leg {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Leg) => any;
}
/**
 * <p>A summary of the calculated route.</p>
 */
export interface CalculateRouteSummary {
    /**
     * <p>Specifies a geographical box surrounding a route. Used to zoom into a route when
     *             displaying it in a map. For example, <code>[min x, min y, max x, max y]</code>
     *          </p>
     *         <p>The first 2 <code>bbox</code> parameters describe the lower southwest corner: </p>
     *         <ul>
     *             <li>
     *                 <p>The first <code>bbox</code> position is the X coordinate or longitude of the
     *                     lower southwest corner. </p>
     *             </li>
     *             <li>
     *                 <p>The second <code>bbox</code> position is the Y coordinate or latitude of the
     *                     lower southwest corner. </p>
     *             </li>
     *          </ul>
     *         <p>The next 2 <code>bbox</code> parameters describe the upper northeast corner: </p>
     *         <ul>
     *             <li>
     *                 <p>The third <code>bbox</code> position is the X coordinate, or longitude of the
     *                     upper northeast corner. </p>
     *             </li>
     *             <li>
     *                 <p>The fourth <code>bbox</code> position is the Y coordinate, or longitude of the
     *                     upper northeast corner. </p>
     *             </li>
     *          </ul>
     */
    RouteBBox: number[] | undefined;
    /**
     * <p>The data provider of traffic and road network data used to calculate the route.
     *             Indicates one of the available providers:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>Esri</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Here</code>
     *                </p>
     *             </li>
     *          </ul>
     *         <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>
     */
    DataSource: string | undefined;
    /**
     * <p>The total distance covered by the route. The sum of the distance travelled between
     *             every stop on the route.</p>
     *         <note>
     *             <p>The route <code>distance</code> can't be greater than 250 km. If the route exceeds
     *                 250 km, the response returns a <code>400 RoutesValidationException</code>
     *                 error.</p>
     *         </note>
     */
    Distance: number | undefined;
    /**
     * <p>The total travel time for the route measured in seconds. The sum of the travel time
     *             between every stop on the
     *             route.</p>
     */
    DurationSeconds: number | undefined;
    /**
     * <p>The unit of measurement for the distance.</p>
     */
    DistanceUnit: DistanceUnit | string | undefined;
}
export declare namespace CalculateRouteSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CalculateRouteSummary) => any;
}
/**
 * <p>Returns the result of the route calculation. Metadata includes legs and route
 *             summary.</p>
 */
export interface CalculateRouteResponse {
    /**
     * <p>Contains details about each path between a pair of positions included along a route
     *             such as: <code>StartPosition</code>, <code>EndPosition</code>, <code>Distance</code>,
     *                 <code>DurationSeconds</code>, <code>Geometry</code>, and <code>Steps</code>. The
     *             number of legs returned corresponds to one less than the total number of positions in
     *             the request. </p>
     *         <p>For example, a route with a departure position and destination position returns one
     *             leg with the positions <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#snap-to-nearby-road">snapped to a nearby road</a>:</p>
     *         <ul>
     *             <li>
     *                 <p>The <code>StartPosition</code> is the departure position.</p>
     *             </li>
     *             <li>
     *                 <p>The <code>EndPosition</code> is the destination position.</p>
     *             </li>
     *          </ul>
     *         <p>A route with a waypoint between the departure and destination position returns two
     *             legs with the positions snapped to a nearby road.:</p>
     *         <ul>
     *             <li>
     *                 <p>Leg 1: The <code>StartPosition</code> is the departure position . The
     *                         <code>EndPosition</code> is the waypoint positon.</p>
     *             </li>
     *             <li>
     *                 <p>Leg 2: The <code>StartPosition</code> is the waypoint position. The
     *                         <code>EndPosition</code> is the destination position.</p>
     *             </li>
     *          </ul>
     */
    Legs: Leg[] | undefined;
    /**
     * <p>Contains information about the whole route, such as: <code>RouteBBox</code>,
     *                 <code>DataSource</code>, <code>Distance</code>, <code>DistanceUnit</code>, and
     *                 <code>DurationSeconds</code>
     *          </p>
     */
    Summary: CalculateRouteSummary | undefined;
}
export declare namespace CalculateRouteResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CalculateRouteResponse) => any;
}
export declare type PricingPlan = "MobileAssetManagement" | "MobileAssetTracking" | "RequestBasedUsage";
export interface CreateGeofenceCollectionRequest {
    /**
     * <p>A custom name for the geofence collection.</p>
     *         <p>Requirements:</p>
     *         <ul>
     *             <li>
     *                 <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods
     *                     (.), and underscores (_). </p>
     *             </li>
     *             <li>
     *                 <p>Must be a unique geofence collection name.</p>
     *             </li>
     *             <li>
     *                 <p>No spaces allowed. For example, <code>ExampleGeofenceCollection</code>.</p>
     *             </li>
     *          </ul>
     */
    CollectionName: string | undefined;
    /**
     * <p>Specifies the pricing plan for the geofence collection.</p>
     *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
     *             page</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>Specifies the data provider for the geofence collection.</p>
     *         <ul>
     *             <li>
     *                 <p>Required value for the following pricing plans: <code>MobileAssetTracking
     *                     </code>| <code>MobileAssetManagement</code>
     *                </p>
     *             </li>
     *          </ul>
     *         <p>For more information about <a href="https://aws.amazon.com/location/data-providers/">Data Providers</a>, and <a href="https://aws.amazon.com/location/pricing/">Pricing plans</a>, see the Amazon Location
     *             Service product page.</p>
     * 	        <note>
     * 	           <p>Amazon Location Service only uses <code>PricingPlanDataSource</code> to calculate billing for
     *                 your geofence collection. Your data won't be shared with the data provider, and will
     *                 remain in your AWS account or Region unless you move it.</p>
     * 	        </note>
     *         <p>Valid Values: <code>Esri </code>| <code>Here</code>
     *          </p>
     */
    PricingPlanDataSource?: string;
    /**
     * <p>An optional description for the geofence collection.</p>
     */
    Description?: string;
    /**
     * <p>Applies one or more tags to the geofence collection. A tag is a key-value pair helps
     *             manage, identify, search, and filter your resources by labelling them.</p>
     *         <p>Format: <code>"key" : "value"</code>
     *          </p>
     *         <p>Restrictions:</p>
     *         <ul>
     *             <li>
     *                 <p>Maximum 50 tags per resource</p>
     *             </li>
     *             <li>
     *                 <p>Each resource tag must be unique with a maximum of one value.</p>
     *             </li>
     *             <li>
     *                 <p>Maximum key length: 128 Unicode characters in UTF-8</p>
     *             </li>
     *             <li>
     *                 <p>Maximum value length: 256 Unicode characters in UTF-8</p>
     *             </li>
     *             <li>
     *                 <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters:
     *                     + - = . _ : / @. </p>
     *             </li>
     *          </ul>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">AWS KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN.
     * 	</p>
     */
    KmsKeyId?: string;
}
export declare namespace CreateGeofenceCollectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGeofenceCollectionRequest) => any;
}
export interface CreateGeofenceCollectionResponse {
    /**
     * <p>The name for the geofence collection.</p>
     */
    CollectionName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the geofence collection resource. Used when you
     *             need to specify a resource across all AWS. </p>
     *         <ul>
     *             <li>
     *                 <p>Format example:
     *                         <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    CollectionArn: string | undefined;
    /**
     * <p>The timestamp for when the geofence collection was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    CreateTime: Date | undefined;
}
export declare namespace CreateGeofenceCollectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGeofenceCollectionResponse) => any;
}
/**
 * <p>Specifies the map tile style selected from an available provider.</p>
 */
export interface MapConfiguration {
    /**
     * <p>Specifies the map style selected from an available data provider.</p>
     *         <p>Valid styles: <code>RasterEsriImagery</code>, <code>VectorEsriStreets</code>,
     *                 <code>VectorEsriTopographic</code>, <code>VectorEsriNavigation</code>,
     *                 <code>VectorEsriDarkGrayCanvas</code>, <code>VectorEsriLightGrayCanvas</code>,
     *                 <code>VectorHereBerlin</code>.</p>
     *         <note>
     *             <p>When using HERE as your data provider, and selecting the Style
     *                     <code>VectorHereBerlin</code>, you may not use HERE Maps for Asset Management.
     *                 See the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p>
     *         </note>
     */
    Style: string | undefined;
}
export declare namespace MapConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MapConfiguration) => any;
}
export interface CreateMapRequest {
    /**
     * <p>The name for the map resource.</p>
     *         <p>Requirements:</p>
     *         <ul>
     *             <li>
     *                <p>Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p>
     *             </li>
     *             <li>
     *                <p>Must be a unique map resource name. </p>
     *             </li>
     *             <li>
     *                 <p>No spaces allowed. For example, <code>ExampleMap</code>.</p>
     *             </li>
     *          </ul>
     */
    MapName: string | undefined;
    /**
     * <p>Specifies the map style selected from an available data provider.</p>
     */
    Configuration: MapConfiguration | undefined;
    /**
     * <p>Specifies the pricing plan for your map resource.</p>
     *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
     *                 page</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>An optional description for the map resource.</p>
     */
    Description?: string;
    /**
     * <p>Applies one or more tags to the map resource. A tag is a key-value pair helps manage,
     *             identify, search, and filter your resources by labelling them.</p>
     *          <p>Format: <code>"key" : "value"</code>
     *          </p>
     *          <p>Restrictions:</p>
     *          <ul>
     *             <li>
     *                <p>Maximum 50 tags per resource</p>
     *             </li>
     *             <li>
     *                <p>Each resource tag must be unique with a maximum of one value.</p>
     *             </li>
     *             <li>
     *                <p>Maximum key length: 128 Unicode characters in UTF-8</p>
     *             </li>
     *             <li>
     *                <p>Maximum value length:  256 Unicode characters in UTF-8</p>
     *             </li>
     *             <li>
     *                <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : /
     *                     @. </p>
     *             </li>
     *          </ul>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateMapRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMapRequest) => any;
}
export interface CreateMapResponse {
    /**
     * <p>The name of the map resource.</p>
     */
    MapName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the map resource. Used when you need to specify a
     *             resource across all AWS.</p>
     *         <ul>
     *             <li>
     *                 <p>Format example:
     *                     <code>arn:aws:geo:region:account-id:maps/ExampleMap</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    MapArn: string | undefined;
    /**
     * <p>The timestamp for when the map resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
     */
    CreateTime: Date | undefined;
}
export declare namespace CreateMapResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMapResponse) => any;
}
export declare type IntendedUse = "SingleUse" | "Storage";
/**
 * <p>Specifies the data storage option chosen for requesting Places.</p>
 */
export interface DataSourceConfiguration {
    /**
     * <p>Specifies how the results of an operation will be stored by the caller. </p>
     *          <p>Valid values include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>SingleUse</code> specifies that the results won't be stored. </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Storage</code> specifies that the result can be cached or stored in a database.</p>
     *                <important>
     *                   <p>Place index resources using HERE as a data provider can't be configured to
     *                   store results for locations in Japan when choosing <code>Storage</code> for the
     *                      <code>IntendedUse</code> parameter.</p>
     *                </important>
     *             </li>
     *          </ul>
     *          <p>Default value:  <code>SingleUse</code>
     *          </p>
     */
    IntendedUse?: IntendedUse | string;
}
export declare namespace DataSourceConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataSourceConfiguration) => any;
}
export interface CreatePlaceIndexRequest {
    /**
     * <p>The name of the place index resource. </p>
     *          <p>Requirements:</p>
     *          <ul>
     *             <li>
     *                <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and
     *                underscores (_).</p>
     *             </li>
     *             <li>
     *                <p>Must be a unique place index resource name.</p>
     *             </li>
     *             <li>
     *                <p>No spaces allowed. For example, <code>ExamplePlaceIndex</code>.</p>
     *             </li>
     *          </ul>
     */
    IndexName: string | undefined;
    /**
     * <p>Specifies the data provider of geospatial data.</p>
     *          <note>
     *             <p>This field is case-sensitive. Enter the valid values as shown. For example, entering
     *                <code>HERE</code> will return an error.</p>
     *          </note>
     *          <p>Valid values include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Esri</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Here</code>
     *                </p>
     *                <important>
     *                   <p>Place index resources using HERE as a data provider can't be used to <a href="https://docs.aws.amazon.com/location-places/latest/APIReference/API_DataSourceConfiguration.html">store</a>
     *                   results for locations in Japan. For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for
     *                   Amazon Location Service.</p>
     *                </important>
     *             </li>
     *          </ul>
     *          <p>For additional details on data providers, see the <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers page</a>.</p>
     */
    DataSource: string | undefined;
    /**
     * <p>Specifies the pricing plan for your place index resource.</p>
     *          <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
     *          page</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>The optional description for the place index resource.</p>
     */
    Description?: string;
    /**
     * <p>Specifies the data storage option for requesting Places.</p>
     */
    DataSourceConfiguration?: DataSourceConfiguration;
    /**
     * <p>Applies one or more tags to the place index resource. A tag is a key-value pair helps
     *          manage, identify, search, and filter your resources by labelling them.</p>
     *          <p>Format: <code>"key" : "value"</code>
     *          </p>
     *          <p>Restrictions:</p>
     *          <ul>
     *             <li>
     *                <p>Maximum 50 tags per resource</p>
     *             </li>
     *             <li>
     *                <p>Each resource tag must be unique with a maximum of one value.</p>
     *             </li>
     *             <li>
     *                <p>Maximum key length: 128 Unicode characters in UTF-8</p>
     *             </li>
     *             <li>
     *                <p>Maximum value length: 256 Unicode characters in UTF-8</p>
     *             </li>
     *             <li>
     *                <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + -
     *                = . _ : / @. </p>
     *             </li>
     *          </ul>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreatePlaceIndexRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePlaceIndexRequest) => any;
}
export interface CreatePlaceIndexResponse {
    /**
     * <p>The name for the place index resource.</p>
     */
    IndexName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the place index resource. Used to specify a resource
     *          across all AWS. </p>
     *          <ul>
     *             <li>
     *                <p>Format example:
     *                   <code>arn:aws:geo:region:account-id:place-index/ExamplePlaceIndex</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    IndexArn: string | undefined;
    /**
     * <p>The timestamp for when the place index resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format:
     *             <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    CreateTime: Date | undefined;
}
export declare namespace CreatePlaceIndexResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePlaceIndexResponse) => any;
}
export interface CreateRouteCalculatorRequest {
    /**
     * <p>The name of the route calculator resource. </p>
     *         <p>Requirements:</p>
     *         <ul>
     *             <li>
     *                <p>Can use alphanumeric characters (A–Z, a–z, 0–9) , hyphens (-), periods (.), and underscores
     *                     (_).</p>
     *             </li>
     *             <li>
     *                <p>Must be a unique Route calculator resource name.</p>
     *             </li>
     *             <li>
     *                 <p>No spaces allowed. For example, <code>ExampleRouteCalculator</code>.</p>
     *             </li>
     *          </ul>
     */
    CalculatorName: string | undefined;
    /**
     * <p>Specifies the data provider of traffic and road network data.</p>
     *         <note>
     *             <p>This field is case-sensitive. Enter the valid values as shown. For example,
     *                 entering <code>HERE</code> returns an error.</p>
     *         </note>
     *         <p>Valid Values: <code>Esri</code> | <code>Here</code>
     *          </p>
     *         <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>
     */
    DataSource: string | undefined;
    /**
     * <p>Specifies the pricing plan for your route calculator resource.</p>
     *         <p>For additional details and restrictions on each pricing plan option, see <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>The optional description for the route calculator resource.</p>
     */
    Description?: string;
    /**
     * <p>Applies one or more tags to the route calculator resource. A tag is a key-value pair
     *             helps manage, identify, search, and filter your resources by labelling them.</p>
     *         <ul>
     *             <li>
     *                 <p>For example: { <code>"tag1" : "value1"</code>, <code>"tag2" :
     *                     "value2"</code>}</p>
     *             </li>
     *          </ul>
     *         <p>Format: <code>"key" : "value"</code>
     *          </p>
     *         <p>Restrictions:</p>
     *         <ul>
     *             <li>
     *                 <p>Maximum 50 tags per resource</p>
     *             </li>
     *             <li>
     *                 <p>Each resource tag must be unique with a maximum of one value.</p>
     *             </li>
     *             <li>
     *                 <p>Maximum key length: 128 Unicode characters in UTF-8</p>
     *             </li>
     *             <li>
     *                 <p>Maximum value length: 256 Unicode characters in UTF-8</p>
     *             </li>
     *             <li>
     *                 <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters:
     *                     + - = . _ : / @. </p>
     *             </li>
     *          </ul>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateRouteCalculatorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRouteCalculatorRequest) => any;
}
export interface CreateRouteCalculatorResponse {
    /**
     * <p>The name of the route calculator resource. </p>
     *         <ul>
     *             <li>
     *                 <p>For example, <code>ExampleRouteCalculator</code>.</p>
     *             </li>
     *          </ul>
     */
    CalculatorName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the route calculator resource. Use the ARN when you
     *             specify a resource across all AWS.</p>
     *         <ul>
     *             <li>
     *                 <p>Format example:
     *                         <code>arn:aws:geo:region:account-id:route-calculator/ExampleCalculator</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    CalculatorArn: string | undefined;
    /**
     * <p>The timestamp when the route calculator resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     *         <ul>
     *             <li>
     *                 <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    CreateTime: Date | undefined;
}
export declare namespace CreateRouteCalculatorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRouteCalculatorResponse) => any;
}
export interface CreateTrackerRequest {
    /**
     * <p>The name for the tracker resource.</p>
     *          <p>Requirements:</p>
     *          <ul>
     *             <li>
     *                <p>Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).</p>
     *             </li>
     *             <li>
     *                <p>Must be a unique tracker resource name.</p>
     *             </li>
     *             <li>
     *                 <p>No spaces allowed. For example, <code>ExampleTracker</code>.</p>
     *             </li>
     *          </ul>
     */
    TrackerName: string | undefined;
    /**
     * <p>Specifies the pricing plan for the tracker resource.</p>
     *          <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
     *            page</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">AWS KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN.</p>
     */
    KmsKeyId?: string;
    /**
     * <p>Specifies the data provider for the tracker resource.</p>
     *          <ul>
     *             <li>
     *                <p>Required value for the following pricing plans: <code>MobileAssetTracking
     *                </code>| <code>MobileAssetManagement</code>
     *                </p>
     *            </li>
     *          </ul>
     *          <p>For more information about <a href="https://aws.amazon.com/location/data-providers/">Data Providers</a>, and <a href="https://aws.amazon.com/location/pricing/">Pricing plans</a>, see the Amazon Location
     *            Service product page.</p>
     * 	        <note>
     * 	           <p>Amazon Location Service only uses <code>PricingPlanDataSource</code> to calculate billing for your tracker resource. Your data will not be shared with the data provider, and will remain in your AWS account or Region unless you move it.</p>
     * 	        </note>
     *         <p>Valid Values: <code>Esri</code> | <code>Here</code>
     *          </p>
     */
    PricingPlanDataSource?: string;
    /**
     * <p>An optional description for the tracker resource.</p>
     */
    Description?: string;
    /**
     * <p>Applies one or more tags to the tracker resource. A tag is a key-value pair helps
     *             manage, identify, search, and filter your resources by labelling them.</p>
     *         <p>Format: <code>"key" : "value"</code>
     *          </p>
     *         <p>Restrictions:</p>
     *         <ul>
     *             <li>
     *                 <p>Maximum 50 tags per resource</p>
     *             </li>
     *             <li>
     *                 <p>Each resource tag must be unique with a maximum of one value.</p>
     *             </li>
     *             <li>
     *                 <p>Maximum key length: 128 Unicode characters in UTF-8</p>
     *             </li>
     *             <li>
     *                 <p>Maximum value length: 256 Unicode characters in UTF-8</p>
     *             </li>
     *             <li>
     *                 <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters:
     *                     + - = . _ : / @. </p>
     *             </li>
     *          </ul>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateTrackerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateTrackerRequest) => any;
}
export interface CreateTrackerResponse {
    /**
     * <p>The name of the tracker resource.</p>
     */
    TrackerName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify
     *             a resource across all AWS.</p>
     *         <ul>
     *             <li>
     *                 <p>Format example:
     *                         <code>arn:aws:geo:region:account-id:tracker/ExampleTracker</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    TrackerArn: string | undefined;
    /**
     * <p>The timestamp for when the tracker resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    CreateTime: Date | undefined;
}
export declare namespace CreateTrackerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateTrackerResponse) => any;
}
export interface DeleteGeofenceCollectionRequest {
    /**
     * <p>The name of the geofence collection to be deleted.</p>
     */
    CollectionName: string | undefined;
}
export declare namespace DeleteGeofenceCollectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteGeofenceCollectionRequest) => any;
}
export interface DeleteGeofenceCollectionResponse {
}
export declare namespace DeleteGeofenceCollectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteGeofenceCollectionResponse) => any;
}
export interface DeleteMapRequest {
    /**
     * <p>The name of the map resource to be deleted.</p>
     */
    MapName: string | undefined;
}
export declare namespace DeleteMapRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteMapRequest) => any;
}
export interface DeleteMapResponse {
}
export declare namespace DeleteMapResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteMapResponse) => any;
}
export interface DeletePlaceIndexRequest {
    /**
     * <p>The name of the place index resource to be deleted.</p>
     */
    IndexName: string | undefined;
}
export declare namespace DeletePlaceIndexRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePlaceIndexRequest) => any;
}
export interface DeletePlaceIndexResponse {
}
export declare namespace DeletePlaceIndexResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePlaceIndexResponse) => any;
}
export interface DeleteRouteCalculatorRequest {
    /**
     * <p>The name of the route calculator resource to be deleted.</p>
     */
    CalculatorName: string | undefined;
}
export declare namespace DeleteRouteCalculatorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRouteCalculatorRequest) => any;
}
export interface DeleteRouteCalculatorResponse {
}
export declare namespace DeleteRouteCalculatorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRouteCalculatorResponse) => any;
}
export interface DeleteTrackerRequest {
    /**
     * <p>The name of the tracker resource to be deleted.</p>
     */
    TrackerName: string | undefined;
}
export declare namespace DeleteTrackerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTrackerRequest) => any;
}
export interface DeleteTrackerResponse {
}
export declare namespace DeleteTrackerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTrackerResponse) => any;
}
export interface DescribeGeofenceCollectionRequest {
    /**
     * <p>The name of the geofence collection.</p>
     */
    CollectionName: string | undefined;
}
export declare namespace DescribeGeofenceCollectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeGeofenceCollectionRequest) => any;
}
export interface DescribeGeofenceCollectionResponse {
    /**
     * <p>The name of the geofence collection.</p>
     */
    CollectionName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the geofence collection resource. Used when you
     *             need to specify a resource across all AWS. </p>
     *         <ul>
     *             <li>
     *                 <p>Format example:
     *                         <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    CollectionArn: string | undefined;
    /**
     * <p>The optional description for the geofence collection.</p>
     */
    Description: string | undefined;
    /**
     * <p>The pricing plan selected for the specified geofence collection.</p>
     *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
     *                 page</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>The specified data provider for the geofence collection.</p>
     */
    PricingPlanDataSource?: string;
    /**
     * <p>A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">AWS KMS customer managed key</a> assigned to the Amazon Location resource</p>
     */
    KmsKeyId?: string;
    /**
     * <p>Displays the key, value pairs of tags associated with this resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The timestamp for when the geofence resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp for when the geofence collection was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    UpdateTime: Date | undefined;
}
export declare namespace DescribeGeofenceCollectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeGeofenceCollectionResponse) => any;
}
export interface DescribeMapRequest {
    /**
     * <p>The name of the map resource.</p>
     */
    MapName: string | undefined;
}
export declare namespace DescribeMapRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeMapRequest) => any;
}
export interface DescribeMapResponse {
    /**
     * <p>The map style selected from an available provider.</p>
     */
    MapName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the map resource. Used when you need to specify a
     *             resource across all AWS.</p>
     *         <ul>
     *             <li>
     *                 <p>Format example:
     *                     <code>arn:aws:geo:region:account-id:maps/ExampleMap</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    MapArn: string | undefined;
    /**
     * <p>The pricing plan selected for the specified map resource.</p>
     *
     *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
     *                 page</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>Specifies the data provider for the associated map tiles.</p>
     */
    DataSource: string | undefined;
    /**
     * <p>Specifies the map tile style selected from a partner data provider.</p>
     */
    Configuration: MapConfiguration | undefined;
    /**
     * <p>The optional description for the map resource.</p>
     */
    Description: string | undefined;
    /**
     * <p>Tags associated with the map resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The timestamp for when the map resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp for when the map resource was last update in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
     */
    UpdateTime: Date | undefined;
}
export declare namespace DescribeMapResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeMapResponse) => any;
}
export interface DescribePlaceIndexRequest {
    /**
     * <p>The name of the place index resource.</p>
     */
    IndexName: string | undefined;
}
export declare namespace DescribePlaceIndexRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePlaceIndexRequest) => any;
}
export interface DescribePlaceIndexResponse {
    /**
     * <p>The name of the place index resource being described.</p>
     */
    IndexName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the place index resource. Used to specify a resource
     *          across all AWS. </p>
     *          <ul>
     *             <li>
     *                <p>Format example:
     *                   <code>arn:aws:geo:region:account-id:place-index/ExamplePlaceIndex</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    IndexArn: string | undefined;
    /**
     * <p>The pricing plan selected for the specified place index resource.</p>
     *          <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
     *             page</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>The optional description for the place index resource.</p>
     */
    Description: string | undefined;
    /**
     * <p>The timestamp for when the place index resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format:
     *             <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp for when the place index resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format:
     *             <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    UpdateTime: Date | undefined;
    /**
     * <p>The data provider of geospatial data. Indicates one of the available providers:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Esri</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Here</code>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>For additional details on data providers, see the <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers
     *          page</a>.</p>
     */
    DataSource: string | undefined;
    /**
     * <p>The specified data storage option for requesting Places.</p>
     */
    DataSourceConfiguration: DataSourceConfiguration | undefined;
    /**
     * <p>Tags associated with place index resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DescribePlaceIndexResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePlaceIndexResponse) => any;
}
export interface DescribeRouteCalculatorRequest {
    /**
     * <p>The name of the route calculator resource.</p>
     */
    CalculatorName: string | undefined;
}
export declare namespace DescribeRouteCalculatorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRouteCalculatorRequest) => any;
}
export interface DescribeRouteCalculatorResponse {
    /**
     * <p>The name of the route calculator resource being described.</p>
     */
    CalculatorName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the Route calculator resource. Use the ARN when you
     *             specify a resource across AWS.</p>
     *         <ul>
     *             <li>
     *                 <p>Format example:
     *                         <code>arn:aws:geo:region:account-id:route-calculator/ExampleCalculator</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    CalculatorArn: string | undefined;
    /**
     * <p>The pricing plan selected for the specified route calculator resource.</p>
     *         <p>For additional details and restrictions on each pricing plan option, see <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>The optional description of the route calculator resource.</p>
     */
    Description: string | undefined;
    /**
     * <p>The timestamp when the route calculator resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     *         <ul>
     *             <li>
     *                 <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp when the route calculator resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     *         <ul>
     *             <li>
     *                 <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    UpdateTime: Date | undefined;
    /**
     * <p>The data provider of traffic and road network data. Indicates one of the available
     *             providers:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>Esri</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Here</code>
     *                </p>
     *             </li>
     *          </ul>
     *         <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>
     */
    DataSource: string | undefined;
    /**
     * <p>Tags associated with route calculator resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DescribeRouteCalculatorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRouteCalculatorResponse) => any;
}
export interface DescribeTrackerRequest {
    /**
     * <p>The name of the tracker resource.</p>
     */
    TrackerName: string | undefined;
}
export declare namespace DescribeTrackerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeTrackerRequest) => any;
}
export interface DescribeTrackerResponse {
    /**
     * <p>The name of the tracker resource.</p>
     */
    TrackerName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify
     *             a resource across all AWS.</p>
     *         <ul>
     *             <li>
     *                 <p>Format example:
     *                         <code>arn:aws:geo:region:account-id:tracker/ExampleTracker</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    TrackerArn: string | undefined;
    /**
     * <p>The optional description for the tracker resource.</p>
     */
    Description: string | undefined;
    /**
     * <p>The pricing plan selected for the specified tracker resource.</p>
     *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
     *                 page</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>The specified data provider for the tracker resource.</p>
     */
    PricingPlanDataSource?: string;
    /**
     * <p>The tags associated with the tracker resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The timestamp for when the tracker resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp for when the tracker resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    UpdateTime: Date | undefined;
    /**
     * <p>A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">AWS KMS customer managed key</a> assigned to the Amazon Location resource.</p>
     */
    KmsKeyId?: string;
}
export declare namespace DescribeTrackerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeTrackerResponse) => any;
}
export interface DisassociateTrackerConsumerRequest {
    /**
     * <p>The name of the tracker resource to be dissociated from the consumer.</p>
     */
    TrackerName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the geofence collection to be disassociated from
     *             the tracker resource. Used when you need to specify a resource across all AWS. </p>
     *         <ul>
     *             <li>
     *                 <p>Format example:
     *                         <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    ConsumerArn: string | undefined;
}
export declare namespace DisassociateTrackerConsumerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateTrackerConsumerRequest) => any;
}
export interface DisassociateTrackerConsumerResponse {
}
export declare namespace DisassociateTrackerConsumerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateTrackerConsumerResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>The mapping from tag key to tag value for each tag associated with the specified resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to update.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The mapping from tag key to tag value for each tag associated with the specified resource.</p>
     */
    Tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource from which you want to remove tags.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The list of tag keys to remove from the resource.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
export interface GetGeofenceRequest {
    /**
     * <p>The geofence collection storing the target geofence.</p>
     */
    CollectionName: string | undefined;
    /**
     * <p>The geofence you're retrieving details for.</p>
     */
    GeofenceId: string | undefined;
}
export declare namespace GetGeofenceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGeofenceRequest) => any;
}
export interface GetGeofenceResponse {
    /**
     * <p>The geofence identifier.</p>
     */
    GeofenceId: string | undefined;
    /**
     * <p>Contains the geofence geometry details describing a polygon.</p>
     */
    Geometry: GeofenceGeometry | undefined;
    /**
     * <p>Identifies the state of the geofence. A geofence will hold one of the following
     *             states:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>ACTIVE</code> — The geofence has been indexed by the system. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>PENDING</code> — The geofence is being processed by the system.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>FAILED</code> — The geofence failed to be indexed by the system.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>DELETED</code> — The geofence has been deleted from the system
     *                     index.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>DELETING</code> — The geofence is being deleted from the system
     *                     index.</p>
     *             </li>
     *          </ul>
     */
    Status: string | undefined;
    /**
     * <p>The timestamp for when the geofence collection was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp for when the geofence collection was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    UpdateTime: Date | undefined;
}
export declare namespace GetGeofenceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGeofenceResponse) => any;
}
export interface ListGeofenceCollectionsRequest {
    /**
     * <p>An optional limit for the number of resources returned in a single call. </p>
     *         <p>Default value: <code>100</code>
     *          </p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token specifying which page of results to return in the response. If no
     *             token is provided, the default page is the first page. </p>
     *         <p>Default value: <code>null</code>
     *          </p>
     */
    NextToken?: string;
}
export declare namespace ListGeofenceCollectionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGeofenceCollectionsRequest) => any;
}
/**
 * <p>Contains the geofence collection details.</p>
 */
export interface ListGeofenceCollectionsResponseEntry {
    /**
     * <p>The name of the geofence collection.</p>
     */
    CollectionName: string | undefined;
    /**
     * <p>The description for the geofence collection</p>
     */
    Description: string | undefined;
    /**
     * <p>The pricing plan for the specified geofence collection.</p>
     *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
     *             page</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>The specified data provider for the geofence collection.</p>
     */
    PricingPlanDataSource?: string;
    /**
     * <p>The timestamp for when the geofence collection was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    CreateTime: Date | undefined;
    /**
     * <p>Specifies a timestamp for when the resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    UpdateTime: Date | undefined;
}
export declare namespace ListGeofenceCollectionsResponseEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGeofenceCollectionsResponseEntry) => any;
}
export interface ListGeofenceCollectionsResponse {
    /**
     * <p>Lists the geofence collections that exist in your AWS account.</p>
     */
    Entries: ListGeofenceCollectionsResponseEntry[] | undefined;
    /**
     * <p>A pagination token indicating there are additional pages available. You can use the
     *             token in a following request to fetch the next set of results. </p>
     */
    NextToken?: string;
}
export declare namespace ListGeofenceCollectionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGeofenceCollectionsResponse) => any;
}
export interface ListGeofencesRequest {
    /**
     * <p>The name of the geofence collection storing the list of geofences.</p>
     */
    CollectionName: string | undefined;
    /**
     * <p>The pagination token specifying which page of results to return in the response. If no
     *             token is provided, the default page is the first page. </p>
     *         <p>Default value: <code>null</code>
     *          </p>
     */
    NextToken?: string;
}
export declare namespace ListGeofencesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGeofencesRequest) => any;
}
/**
 * <p>Contains a list of geofences stored in a given geofence collection.</p>
 */
export interface ListGeofenceResponseEntry {
    /**
     * <p>The geofence identifier.</p>
     */
    GeofenceId: string | undefined;
    /**
     * <p>Contains the geofence geometry details describing a polygon.</p>
     */
    Geometry: GeofenceGeometry | undefined;
    /**
     * <p>Identifies the state of the geofence. A geofence will hold one of the following
     *             states:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>ACTIVE</code> — The geofence has been indexed by the system. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>PENDING</code> — The geofence is being processed by the system.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>FAILED</code> — The geofence failed to be indexed by the system.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>DELETED</code> — The geofence has been deleted from the system
     *                     index.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>DELETING</code> — The geofence is being deleted from the system
     *                     index.</p>
     *             </li>
     *          </ul>
     */
    Status: string | undefined;
    /**
     * <p>The timestamp for when the geofence was stored in a geofence collection in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp for when the geofence was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    UpdateTime: Date | undefined;
}
export declare namespace ListGeofenceResponseEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGeofenceResponseEntry) => any;
}
export interface ListGeofencesResponse {
    /**
     * <p>Contains a list of geofences stored in the geofence collection.</p>
     */
    Entries: ListGeofenceResponseEntry[] | undefined;
    /**
     * <p>A pagination token indicating there are additional pages available. You can use the
     *             token in a following request to fetch the next set of results. </p>
     */
    NextToken?: string;
}
export declare namespace ListGeofencesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGeofencesResponse) => any;
}
export interface PutGeofenceRequest {
    /**
     * <p>The geofence collection to store the geofence in.</p>
     */
    CollectionName: string | undefined;
    /**
     * <p>An identifier for the geofence. For example, <code>ExampleGeofence-1</code>.</p>
     */
    GeofenceId: string | undefined;
    /**
     * <p>Contains the polygon details to specify the position of the geofence.</p>
     *         <note>
     *             <p>Each <a href="https://docs.aws.amazon.com/location-geofences/latest/APIReference/API_GeofenceGeometry.html">geofence polygon</a> can have a maximum of 1,000 vertices.</p>
     *         </note>
     */
    Geometry: GeofenceGeometry | undefined;
}
export declare namespace PutGeofenceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutGeofenceRequest) => any;
}
export interface PutGeofenceResponse {
    /**
     * <p>The geofence identifier entered in the request.</p>
     */
    GeofenceId: string | undefined;
    /**
     * <p>The timestamp for when the geofence was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp for when the geofence was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>
     *          </p>
     */
    UpdateTime: Date | undefined;
}
export declare namespace PutGeofenceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutGeofenceResponse) => any;
}
export interface GetDevicePositionRequest {
    /**
     * <p>The tracker resource receiving the position update.</p>
     */
    TrackerName: string | undefined;
    /**
     * <p>The device whose position you want to retrieve.</p>
     */
    DeviceId: string | undefined;
}
export declare namespace GetDevicePositionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDevicePositionRequest) => any;
}
export interface GetDevicePositionResponse {
    /**
     * <p>The device whose position you retrieved.</p>
     */
    DeviceId?: string;
    /**
     * <p>The timestamp at which the device's position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601 </a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    SampleTime: Date | undefined;
    /**
     * <p>The timestamp for when the tracker resource received the device position in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601 </a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    ReceivedTime: Date | undefined;
    /**
     * <p>The last known device position.</p>
     */
    Position: number[] | undefined;
}
export declare namespace GetDevicePositionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDevicePositionResponse) => any;
}
export interface GetDevicePositionHistoryRequest {
    /**
     * <p>The tracker resource receiving the request for the device position history.</p>
     */
    TrackerName: string | undefined;
    /**
     * <p>The device whose position history you want to retrieve.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>The pagination token specifying which page of results to return in the response. If no
     *             token is provided, the default page is the first page. </p>
     *          <p>Default value: <code>null</code>
     *          </p>
     */
    NextToken?: string;
    /**
     * <p>Specify the start time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be 24 hours
     *             prior to the time that the request is made.</p>
     *         <p>Requirement:</p>
     *          <ul>
     *             <li>
     *                <p>The time specified for <code>StartTimeInclusive</code> must be before
     *                         <code>EndTimeExclusive</code>.</p>
     *            </li>
     *          </ul>
     */
    StartTimeInclusive?: Date;
    /**
     * <p>Specify the end time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be the time
     *             that the request is made.</p>
     *         <p>Requirement:</p>
     *          <ul>
     *             <li>
     *                <p>The time specified for <code>EndTimeExclusive</code> must be after the time for
     *                         <code>StartTimeInclusive</code>.</p>
     *            </li>
     *          </ul>
     */
    EndTimeExclusive?: Date;
}
export declare namespace GetDevicePositionHistoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDevicePositionHistoryRequest) => any;
}
export interface GetDevicePositionHistoryResponse {
    /**
     * <p>Contains the position history details for the requested device.</p>
     */
    DevicePositions: DevicePosition[] | undefined;
    /**
     * <p>A pagination token indicating there are additional pages available. You can use the
     *             token in a following request to fetch the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetDevicePositionHistoryResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDevicePositionHistoryResponse) => any;
}
export interface GetMapGlyphsRequest {
    /**
     * <p>The map resource associated with the glyph ﬁle.</p>
     */
    MapName: string | undefined;
    /**
     * <p>A comma-separated list of fonts to load glyphs from in order of preference.. For
     *             example, <code>Noto Sans, Arial Unicode</code>.</p>
     */
    FontStack: string | undefined;
    /**
     * <p>A Unicode range of characters to download glyphs for. Each response will contain 256
     *             characters. For example, 0–255 includes all characters from range <code>U+0000</code> to
     *                 <code>00FF</code>. Must be aligned to multiples of 256.</p>
     */
    FontUnicodeRange: string | undefined;
}
export declare namespace GetMapGlyphsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMapGlyphsRequest) => any;
}
export interface GetMapGlyphsResponse {
    /**
     * <p>The blob's content type.</p>
     */
    Blob?: Uint8Array;
    /**
     * <p>The map glyph content type. For example, <code>application/octet-stream</code>.</p>
     */
    ContentType?: string;
}
export declare namespace GetMapGlyphsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMapGlyphsResponse) => any;
}
export interface GetMapSpritesRequest {
    /**
     * <p>The map resource associated with the sprite ﬁle.</p>
     */
    MapName: string | undefined;
    /**
     * <p>The name of the sprite ﬁle. Use the following ﬁle names for the sprite sheet:</p>
     *         <ul>
     *             <li>
     *                <p>
     *                   <code>sprites.png</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>sprites@2x.png</code> for high pixel density displays</p>
     *             </li>
     *          </ul>
     *         <p>For the JSON document contain image offsets. Use the following ﬁle names:</p>
     *         <ul>
     *             <li>
     *                <p>
     *                   <code>sprites.json</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>sprites@2x.json</code> for high pixel density displays</p>
     *             </li>
     *          </ul>
     */
    FileName: string | undefined;
}
export declare namespace GetMapSpritesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMapSpritesRequest) => any;
}
export interface GetMapSpritesResponse {
    /**
     * <p>Contains the body of the sprite sheet or JSON offset ﬁle.</p>
     */
    Blob?: Uint8Array;
    /**
     * <p>The content type of the sprite sheet and offsets. For example, the sprite sheet
     *             content type is <code>image/png</code>, and the sprite offset JSON document is
     *                 <code>application/json</code>. </p>
     */
    ContentType?: string;
}
export declare namespace GetMapSpritesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMapSpritesResponse) => any;
}
export interface GetMapStyleDescriptorRequest {
    /**
     * <p>The map resource to retrieve the style descriptor from.</p>
     */
    MapName: string | undefined;
}
export declare namespace GetMapStyleDescriptorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMapStyleDescriptorRequest) => any;
}
export interface GetMapStyleDescriptorResponse {
    /**
     * <p>Contains the body of the style descriptor.</p>
     */
    Blob?: Uint8Array;
    /**
     * <p>The style descriptor's content type. For example,
     *             <code>application/json</code>.</p>
     */
    ContentType?: string;
}
export declare namespace GetMapStyleDescriptorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMapStyleDescriptorResponse) => any;
}
export interface GetMapTileRequest {
    /**
     * <p>The map resource to retrieve the map tiles from.</p>
     */
    MapName: string | undefined;
    /**
     * <p>The zoom value for the map tile.</p>
     */
    Z: string | undefined;
    /**
     * <p>The X axis value for the map tile.</p>
     */
    X: string | undefined;
    /**
     * <p>The Y axis value for the map tile. </p>
     */
    Y: string | undefined;
}
export declare namespace GetMapTileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMapTileRequest) => any;
}
export interface GetMapTileResponse {
    /**
     * <p>Contains Mapbox Vector Tile (MVT) data.</p>
     */
    Blob?: Uint8Array;
    /**
     * <p>The map tile's content type. For example,
     *                 <code>application/vnd.mapbox-vector-tile</code>.</p>
     */
    ContentType?: string;
}
export declare namespace GetMapTileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMapTileResponse) => any;
}
export interface ListDevicePositionsRequest {
    /**
     * <p>The tracker resource containing the requested devices.</p>
     */
    TrackerName: string | undefined;
    /**
     * <p>An optional limit for the number of entries returned in a single call.</p>
     *         <p>Default value: <code>100</code>
     *          </p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token specifying which page of results to return in the response. If no
     *             token is provided, the default page is the first page.</p>
     *          <p>Default value: <code>null</code>
     *          </p>
     */
    NextToken?: string;
}
export declare namespace ListDevicePositionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDevicePositionsRequest) => any;
}
/**
 * <p>Contains the tracker resource details.</p>
 */
export interface ListDevicePositionsResponseEntry {
    /**
     * <p>The ID of the device for this position.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>The timestamp at which the device position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
     */
    SampleTime: Date | undefined;
    /**
     * <p>The last known device position. Empty if no positions currently stored.</p>
     */
    Position: number[] | undefined;
}
export declare namespace ListDevicePositionsResponseEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDevicePositionsResponseEntry) => any;
}
export interface ListDevicePositionsResponse {
    /**
     * <p>Contains details about each device's last known position. These details includes the device ID,
     *             the time when the position was sampled on the device, the time that the service received the update, and the most recent coordinates.</p>
     */
    Entries: ListDevicePositionsResponseEntry[] | undefined;
    /**
     * <p>A pagination token indicating there are additional pages available. You can use the
     *             token in a following request to fetch the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListDevicePositionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDevicePositionsResponse) => any;
}
export interface ListMapsRequest {
    /**
     * <p>An optional limit for the number of resources returned in a single call. </p>
     *         <p>Default value: <code>100</code>
     *          </p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token specifying which page of results to return in the response. If no
     *             token is provided, the default page is the first page.</p>
     *         <p>Default value: <code>null</code>
     *          </p>
     */
    NextToken?: string;
}
export declare namespace ListMapsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMapsRequest) => any;
}
/**
 * <p>Contains details of an existing map resource in your AWS account.</p>
 */
export interface ListMapsResponseEntry {
    /**
     * <p>The name of the associated map resource.</p>
     */
    MapName: string | undefined;
    /**
     * <p>The description for the map resource.</p>
     */
    Description: string | undefined;
    /**
     * <p>Specifies the data provider for the associated map tiles.</p>
     */
    DataSource: string | undefined;
    /**
     * <p>The pricing plan for the specified map resource.</p>
     *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
     *             page</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>The timestamp for when the map resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp for when the map resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.</p>
     */
    UpdateTime: Date | undefined;
}
export declare namespace ListMapsResponseEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMapsResponseEntry) => any;
}
export interface ListMapsResponse {
    /**
     * <p>Contains a list of maps in your AWS account</p>
     */
    Entries: ListMapsResponseEntry[] | undefined;
    /**
     * <p>A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. </p>
     */
    NextToken?: string;
}
export declare namespace ListMapsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMapsResponse) => any;
}
export interface ListPlaceIndexesRequest {
    /**
     * <p>An optional limit for the maximum number of results returned in a single call.</p>
     *          <p>Default value: <code>100</code>
     *          </p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token specifying which page of results to return in the response. If no
     *          token is provided, the default page is the first page.</p>
     *          <p>Default value: <code>null</code>
     *          </p>
     */
    NextToken?: string;
}
export declare namespace ListPlaceIndexesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPlaceIndexesRequest) => any;
}
/**
 * <p>A place index resource listed in your AWS account.</p>
 */
export interface ListPlaceIndexesResponseEntry {
    /**
     * <p>The name of the place index resource.</p>
     */
    IndexName: string | undefined;
    /**
     * <p>The optional description for the place index resource.</p>
     */
    Description: string | undefined;
    /**
     * <p>The data provider of geospatial data. Indicates one of the available providers:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Esri</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Here</code>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>For additional details on data providers, see the <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers page</a>.</p>
     */
    DataSource: string | undefined;
    /**
     * <p>The pricing plan for the specified place index resource.</p>
     *          <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
     *          page</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>The timestamp for when the place index resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format:
     *             <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp for when the place index resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format:
     *             <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    UpdateTime: Date | undefined;
}
export declare namespace ListPlaceIndexesResponseEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPlaceIndexesResponseEntry) => any;
}
export interface ListPlaceIndexesResponse {
    /**
     * <p>Lists the place index resources that exist in your AWS account</p>
     */
    Entries: ListPlaceIndexesResponseEntry[] | undefined;
    /**
     * <p>A pagination token indicating there are additional pages available. You can use the
     *          token in a following request to fetch the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListPlaceIndexesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPlaceIndexesResponse) => any;
}
export interface ListRouteCalculatorsRequest {
    /**
     * <p>An optional maximum number of results returned in a single call.</p>
     *         <p>Default Value: <code>100</code>
     *          </p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token specifying which page of results to return in the response. If no
     *             token is provided, the default page is the first page.</p>
     *         <p>Default Value: <code>null</code>
     *          </p>
     */
    NextToken?: string;
}
export declare namespace ListRouteCalculatorsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRouteCalculatorsRequest) => any;
}
/**
 * <p>A route calculator resource listed in your AWS account.</p>
 */
export interface ListRouteCalculatorsResponseEntry {
    /**
     * <p>The name of the route calculator resource.</p>
     */
    CalculatorName: string | undefined;
    /**
     * <p>The optional description of the route calculator resource.</p>
     */
    Description: string | undefined;
    /**
     * <p>The data provider of traffic and road network data. Indicates one of the available
     *             providers:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>Esri</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Here</code>
     *                </p>
     *             </li>
     *          </ul>
     *         <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>
     */
    DataSource: string | undefined;
    /**
     * <p>The pricing plan for the specified route calculator resource.</p>
     *         <p>For additional details and restrictions on each pricing plan option, see <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>The timestamp when the route calculator resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     *         <ul>
     *             <li>
     *                 <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp when the route calculator resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     *         <ul>
     *             <li>
     *                 <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    UpdateTime: Date | undefined;
}
export declare namespace ListRouteCalculatorsResponseEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRouteCalculatorsResponseEntry) => any;
}
export interface ListRouteCalculatorsResponse {
    /**
     * <p>Lists the route calculator resources that exist in your AWS account</p>
     */
    Entries: ListRouteCalculatorsResponseEntry[] | undefined;
    /**
     * <p>A pagination token indicating there are additional pages available. You can use the
     *             token in a subsequent request to fetch the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListRouteCalculatorsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRouteCalculatorsResponse) => any;
}
export interface ListTrackerConsumersRequest {
    /**
     * <p>The tracker resource whose associated geofence collections you want to list.</p>
     */
    TrackerName: string | undefined;
    /**
     * <p>An optional limit for the number of resources returned in a single call. </p>
     *         <p>Default value: <code>100</code>
     *          </p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token specifying which page of results to return in the response. If no
     *             token is provided, the default page is the first page. </p>
     *          <p>Default value: <code>null</code>
     *          </p>
     */
    NextToken?: string;
}
export declare namespace ListTrackerConsumersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTrackerConsumersRequest) => any;
}
export interface ListTrackerConsumersResponse {
    /**
     * <p>Contains the list of geofence collection ARNs associated to the tracker resource.</p>
     */
    ConsumerArns: string[] | undefined;
    /**
     * <p>A pagination token indicating there are additional pages available. You can use the
     *             token in a following request to fetch the next set of results. </p>
     */
    NextToken?: string;
}
export declare namespace ListTrackerConsumersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTrackerConsumersResponse) => any;
}
export interface ListTrackersRequest {
    /**
     * <p>An optional limit for the number of resources returned in a single call. </p>
     *         <p>Default value: <code>100</code>
     *          </p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token specifying which page of results to return in the response. If no
     *             token is provided, the default page is the first page. </p>
     *         <p>Default value: <code>null</code>
     *          </p>
     */
    NextToken?: string;
}
export declare namespace ListTrackersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTrackersRequest) => any;
}
/**
 * <p>Contains the tracker resource details.</p>
 */
export interface ListTrackersResponseEntry {
    /**
     * <p>The name of the tracker resource.</p>
     */
    TrackerName: string | undefined;
    /**
     * <p>The description for the tracker resource.</p>
     */
    Description: string | undefined;
    /**
     * <p>The pricing plan for the specified tracker resource.</p>
     *         <p>For additional details and restrictions on each pricing plan option, see the <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service pricing
     *             page</a>.</p>
     */
    PricingPlan: PricingPlan | string | undefined;
    /**
     * <p>The specified data provider for the tracker resource.</p>
     */
    PricingPlanDataSource?: string;
    /**
     * <p>The timestamp for when the tracker resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    CreateTime: Date | undefined;
    /**
     * <p>The timestamp at which the device's position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a>
     *             format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p>
     */
    UpdateTime: Date | undefined;
}
export declare namespace ListTrackersResponseEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTrackersResponseEntry) => any;
}
export interface ListTrackersResponse {
    /**
     * <p>Contains tracker resources in your AWS account. Details include tracker name,
     *             description and timestamps for when the tracker was created and last updated.</p>
     */
    Entries: ListTrackersResponseEntry[] | undefined;
    /**
     * <p>A pagination token indicating there are additional pages available. You can use the
     *             token in a following request to fetch the next set of results.  </p>
     */
    NextToken?: string;
}
export declare namespace ListTrackersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTrackersResponse) => any;
}
export interface SearchPlaceIndexForPositionRequest {
    /**
     * <p>The name of the place index resource you want to use for the search.</p>
     */
    IndexName: string | undefined;
    /**
     * <p>Specifies a coordinate for the query defined by a longitude, and latitude.</p>
     *          <ul>
     *             <li>
     *                <p>The first position is the X coordinate, or longitude.</p>
     *             </li>
     *             <li>
     *                <p>The second position is the Y coordinate, or latitude. </p>
     *             </li>
     *          </ul>
     *          <p>For example, <code>position=xLongitude&amp;position=yLatitude</code> .</p>
     */
    Position: number[] | undefined;
    /**
     * <p>An optional paramer. The maximum number of results returned per request. </p>
     *          <p>Default value: <code>50</code>
     *          </p>
     */
    MaxResults?: number;
}
export declare namespace SearchPlaceIndexForPositionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchPlaceIndexForPositionRequest) => any;
}
/**
 * <p>Places uses a point geometry to specify a location or a Place.</p>
 */
export interface PlaceGeometry {
    /**
     * <p>A single point geometry specifies a location for a Place using <a href="https://gisgeography.com/wgs84-world-geodetic-system/">WGS 84</a>
     *          coordinates:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <i>x</i> — Specifies the x coordinate or longitude. </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <i>y</i> — Specifies the y coordinate or latitude. </p>
     *             </li>
     *          </ul>
     */
    Point?: number[];
}
export declare namespace PlaceGeometry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PlaceGeometry) => any;
}
/**
 * <p>Contains details about addresses or points of interest that match the search
 *          criteria.</p>
 */
export interface Place {
    /**
     * <p>The full name and address of the point of interest such as a city,
     *          region, or country. For example, <code>123 Any Street, Any Town, USA</code>.</p>
     */
    Label?: string;
    /**
     * <p>Places uses a point geometry to specify a location or a Place.</p>
     */
    Geometry: PlaceGeometry | undefined;
    /**
     * <p>The numerical portion of an address, such as a building number. </p>
     */
    AddressNumber?: string;
    /**
     * <p>The name for a street or a road to identify a location. For example, <code>Main
     *          Street</code>.</p>
     */
    Street?: string;
    /**
     * <p>The name of a community district. For example, <code>Downtown</code>.</p>
     */
    Neighborhood?: string;
    /**
     * <p>A name for a local area, such as a city or town name. For example,
     *          <code>Toronto</code>.</p>
     */
    Municipality?: string;
    /**
     * <p>A country, or an area that's part of a larger region .  For example, <code>Metro
     *             Vancouver</code>.</p>
     */
    SubRegion?: string;
    /**
     * <p>A name for an area or geographical division, such as a province or state name. For
     *          example, <code>British Columbia</code>.</p>
     */
    Region?: string;
    /**
     * <p>A country/region specified using <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit
     *          country/region code. For example, <code>CAN</code>.</p>
     */
    Country?: string;
    /**
     * <p>A group of numbers and letters in a country-specific format, which accompanies the
     *          address for the purpose of identifying a location. </p>
     */
    PostalCode?: string;
}
export declare namespace Place {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Place) => any;
}
/**
 * <p>Specifies a single point of interest, or Place as a result of a search query obtained
 *          from a dataset configured in the place index resource.</p>
 */
export interface SearchForPositionResult {
    /**
     * <p>Contains details about the relevant point of interest.</p>
     */
    Place: Place | undefined;
}
export declare namespace SearchForPositionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchForPositionResult) => any;
}
/**
 * <p>A summary of the reverse geocoding request sent using <code>SearchPlaceIndexForPosition</code>.</p>
 */
export interface SearchPlaceIndexForPositionSummary {
    /**
     * <p>The position given in the reverse geocoding request.</p>
     */
    Position: number[] | undefined;
    /**
     * <p>An optional parameter. The maximum number of results returned per request. </p>
     *          <p>Default value: <code>50</code>
     *          </p>
     */
    MaxResults?: number;
    /**
     * <p>The data provider of geospatial data. Indicates one of the available providers:</p>
     *          <ul>
     *             <li>
     *                <p>Esri</p>
     *             </li>
     *             <li>
     *                <p>HERE</p>
     *             </li>
     *          </ul>
     *          <p>For additional details on data providers, see the <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers page</a>.</p>
     */
    DataSource: string | undefined;
}
export declare namespace SearchPlaceIndexForPositionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchPlaceIndexForPositionSummary) => any;
}
export interface SearchPlaceIndexForPositionResponse {
    /**
     * <p>Contains a summary of the request.</p>
     */
    Summary: SearchPlaceIndexForPositionSummary | undefined;
    /**
     * <p>Returns a list of Places closest to the specified position. Each result contains
     *          additional information about the Places returned.</p>
     */
    Results: SearchForPositionResult[] | undefined;
}
export declare namespace SearchPlaceIndexForPositionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchPlaceIndexForPositionResponse) => any;
}
export interface SearchPlaceIndexForTextRequest {
    /**
     * <p>The name of the place index resource you want to use for the search.</p>
     */
    IndexName: string | undefined;
    /**
     * <p>The address, name,
     *          city, or region to be used in the search. In free-form text format. For example, <code>123 Any
     *             Street</code>.</p>
     */
    Text: string | undefined;
    /**
     * <p>Searches for results closest to the given position. An optional parameter defined by
     *          longitude, and latitude.</p>
     *          <ul>
     *             <li>
     *                <p>The first <code>bias</code> position is the X coordinate, or longitude.</p>
     *             </li>
     *             <li>
     *                <p>The second <code>bias</code> position is the Y coordinate, or latitude. </p>
     *             </li>
     *          </ul>
     *          <p>For example, <code>bias=xLongitude&amp;bias=yLatitude</code>.</p>
     */
    BiasPosition?: number[];
    /**
     * <p>Filters the results by returning only Places within the provided bounding box. An
     *          optional parameter.</p>
     *          <p>The first 2 <code>bbox</code> parameters describe the lower southwest corner:</p>
     *          <ul>
     *             <li>
     *                <p>The first <code>bbox</code> position is the X coordinate or longitude of the lower
     *                southwest corner.</p>
     *             </li>
     *             <li>
     *                <p>The second <code>bbox</code> position is the Y coordinate or latitude of the lower
     *                southwest corner.</p>
     *             </li>
     *          </ul>
     *          <p>For example, <code>bbox=xLongitudeSW&amp;bbox=yLatitudeSW</code>.</p>
     *          <p>The next <code>bbox</code> parameters describe the upper northeast corner:</p>
     *          <ul>
     *             <li>
     *                <p>The third <code>bbox</code> position is the X coordinate, or longitude of the
     *                upper northeast corner.</p>
     *             </li>
     *             <li>
     *                <p>The fourth <code>bbox</code> position is the Y coordinate, or longitude of the
     *                upper northeast corner.</p>
     *             </li>
     *          </ul>
     *          <p>For example, <code>bbox=xLongitudeNE&amp;bbox=yLatitudeNE</code>
     *          </p>
     */
    FilterBBox?: number[];
    /**
     * <p>Limits the search to the given a list of countries/regions. An optional
     *          parameter.</p>
     *          <ul>
     *             <li>
     *                <p>Use the <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit
     *             country code. For example, Australia uses three upper-case characters:
     *             <code>AUS</code>.</p>
     *             </li>
     *          </ul>
     */
    FilterCountries?: string[];
    /**
     * <p>An optional parameter. The maximum number of results returned per request. </p>
     *          <p>The default: <code>50</code>
     *          </p>
     */
    MaxResults?: number;
}
export declare namespace SearchPlaceIndexForTextRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchPlaceIndexForTextRequest) => any;
}
/**
 * <p>Contains relevant Places returned by calling
 *          <code>SearchPlaceIndexForText</code>.</p>
 */
export interface SearchForTextResult {
    /**
     * <p>Contains details about the relevant point of interest.</p>
     */
    Place: Place | undefined;
}
export declare namespace SearchForTextResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchForTextResult) => any;
}
/**
 * <p>A summary of the geocoding request sent using <code>SearchPlaceIndexForText</code>.</p>
 */
export interface SearchPlaceIndexForTextSummary {
    /**
     * <p>The address, name, city or region to be used in the geocoding request. In free-form text
     *          format. For example, <code>Vancouver</code>.</p>
     */
    Text: string | undefined;
    /**
     * <p>Contains the coordinates for the bias position entered in the geocoding request.</p>
     */
    BiasPosition?: number[];
    /**
     * <p>Contains the coordinates for the optional bounding box coordinated entered in the
     *          geocoding request.</p>
     */
    FilterBBox?: number[];
    /**
     * <p>Contains the country filter entered in the geocoding request.</p>
     */
    FilterCountries?: string[];
    /**
     * <p>Contains the maximum number of results indicated for the request.</p>
     */
    MaxResults?: number;
    /**
     * <p>A bounding box that contains the search results within the specified area indicated by
     *             <code>FilterBBox</code>. A subset of bounding box specified using
     *             <code>FilterBBox</code>.</p>
     */
    ResultBBox?: number[];
    /**
     * <p>The data provider of geospatial data. Indicates one of the available providers:</p>
     *          <ul>
     *             <li>
     *                <p>Esri</p>
     *             </li>
     *             <li>
     *                <p>HERE</p>
     *             </li>
     *          </ul>
     *          <p>For additional details on data providers, see the <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers page</a>.</p>
     */
    DataSource: string | undefined;
}
export declare namespace SearchPlaceIndexForTextSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchPlaceIndexForTextSummary) => any;
}
export interface SearchPlaceIndexForTextResponse {
    /**
     * <p>Contains a summary of the request. Contains the <code>BiasPosition</code>,
     *          <code>DataSource</code>, <code>FilterBBox</code>, <code>FilterCountries</code>,
     *          <code>MaxResults</code>, <code>ResultBBox</code>, and <code>Text</code>.</p>
     */
    Summary: SearchPlaceIndexForTextSummary | undefined;
    /**
     * <p>A list of Places closest to the specified position. Each result contains additional
     *          information about the specific point of interest. </p>
     */
    Results: SearchForTextResult[] | undefined;
}
export declare namespace SearchPlaceIndexForTextResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchPlaceIndexForTextResponse) => any;
}
