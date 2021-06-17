import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum AngleUnits {
    DEGREE_ANGLE = "DEGREE_ANGLE",
    RADIAN = "RADIAN"
}
/**
 * <p>Details about an antenna demod decode <code>Config</code> used in a contact.</p>
 */
export interface AntennaDemodDecodeDetails {
    /**
     * <p>Name of an antenna demod decode output node used in a contact.</p>
     */
    outputNode?: string;
}
export declare namespace AntennaDemodDecodeDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AntennaDemodDecodeDetails) => any;
}
export declare enum BandwidthUnits {
    GHZ = "GHz",
    KHZ = "kHz",
    MHZ = "MHz"
}
/**
 * <p>Object that describes the frequency bandwidth. </p>
 */
export interface FrequencyBandwidth {
    /**
     * <p>Frequency bandwidth value. AWS Ground Station currently has the following bandwidth limitations:</p>
     *             <ul>
     *             <li>
     *                <p>For <code>AntennaDownlinkDemodDecodeconfig</code>, valid values are between 125 kHz to 650 MHz.</p>
     *             </li>
     *             <li>
     *                <p>For <code>AntennaDownlinkconfig</code>, valid values are between 10 kHz to 54 MHz.</p>
     *             </li>
     *             <li>
     *                <p>For <code>AntennaUplinkConfig</code>, valid values are between 10 kHz to 54 MHz.</p>
     *             </li>
     *          </ul>
     */
    value: number | undefined;
    /**
     * <p>Frequency bandwidth units.</p>
     */
    units: BandwidthUnits | string | undefined;
}
export declare namespace FrequencyBandwidth {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FrequencyBandwidth) => any;
}
export declare enum FrequencyUnits {
    GHZ = "GHz",
    KHZ = "kHz",
    MHZ = "MHz"
}
/**
 * <p>Object that describes the frequency.</p>
 */
export interface Frequency {
    /**
     * <p>Frequency value. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.</p>
     */
    value: number | undefined;
    /**
     * <p>Frequency units.</p>
     */
    units: FrequencyUnits | string | undefined;
}
export declare namespace Frequency {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Frequency) => any;
}
export declare enum Polarization {
    LEFT_HAND = "LEFT_HAND",
    NONE = "NONE",
    RIGHT_HAND = "RIGHT_HAND"
}
/**
 * <p>Object that describes a spectral <code>Config</code>.</p>
 */
export interface SpectrumConfig {
    /**
     * <p>Center frequency of a spectral <code>Config</code>. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.</p>
     */
    centerFrequency: Frequency | undefined;
    /**
     * <p>Bandwidth of a spectral <code>Config</code>. AWS Ground Station currently has the following bandwidth limitations:</p>
     *             <ul>
     *             <li>
     *                <p>For <code>AntennaDownlinkDemodDecodeconfig</code>, valid values are between 125 kHz to 650 MHz.</p>
     *             </li>
     *             <li>
     *                <p>For <code>AntennaDownlinkconfig</code> valid values are between 10 kHz to 54 MHz.</p>
     *             </li>
     *             <li>
     *                <p>For <code>AntennaUplinkConfig</code>, valid values are between 10 kHz to 54 MHz.</p>
     *             </li>
     *          </ul>
     */
    bandwidth: FrequencyBandwidth | undefined;
    /**
     * <p>Polarization of a spectral <code>Config</code>. Capturing both <code>"RIGHT_HAND"</code> and <code>"LEFT_HAND"</code> polarization requires two separate configs.</p>
     */
    polarization?: Polarization | string;
}
export declare namespace SpectrumConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SpectrumConfig) => any;
}
/**
 * <p>Information about how AWS Ground Station should configure an
 *          antenna for downlink during a contact.</p>
 */
export interface AntennaDownlinkConfig {
    /**
     * <p>Object that describes a spectral <code>Config</code>.</p>
     */
    spectrumConfig: SpectrumConfig | undefined;
}
export declare namespace AntennaDownlinkConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AntennaDownlinkConfig) => any;
}
/**
 * <p>Information about the decode <code>Config</code>.</p>
 */
export interface DecodeConfig {
    /**
     * <p>Unvalidated JSON of a decode <code>Config</code>.</p>
     */
    unvalidatedJSON: string | undefined;
}
export declare namespace DecodeConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DecodeConfig) => any;
}
/**
 * <p>Information about the demodulation <code>Config</code>.</p>
 */
export interface DemodulationConfig {
    /**
     * <p>Unvalidated JSON of a demodulation <code>Config</code>.</p>
     */
    unvalidatedJSON: string | undefined;
}
export declare namespace DemodulationConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DemodulationConfig) => any;
}
/**
 * <p>Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.</p>
 */
export interface AntennaDownlinkDemodDecodeConfig {
    /**
     * <p>Information about the spectral <code>Config</code>.</p>
     */
    spectrumConfig: SpectrumConfig | undefined;
    /**
     * <p>Information about the demodulation <code>Config</code>.</p>
     */
    demodulationConfig: DemodulationConfig | undefined;
    /**
     * <p>Information about the decode <code>Config</code>.</p>
     */
    decodeConfig: DecodeConfig | undefined;
}
export declare namespace AntennaDownlinkDemodDecodeConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AntennaDownlinkDemodDecodeConfig) => any;
}
/**
 * <p>Information about the uplink spectral <code>Config</code>.</p>
 */
export interface UplinkSpectrumConfig {
    /**
     * <p>Center frequency of an uplink spectral <code>Config</code>. Valid values are between 2025 to 2120 MHz.</p>
     */
    centerFrequency: Frequency | undefined;
    /**
     * <p>Polarization of an uplink spectral <code>Config</code>. Capturing both <code>"RIGHT_HAND"</code> and <code>"LEFT_HAND"</code> polarization requires two separate configs.</p>
     */
    polarization?: Polarization | string;
}
export declare namespace UplinkSpectrumConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UplinkSpectrumConfig) => any;
}
export declare enum EirpUnits {
    DBW = "dBW"
}
/**
 * <p>Object that represents EIRP.</p>
 */
export interface Eirp {
    /**
     * <p>Value of an EIRP. Valid values are between 20.0 to 50.0 dBW.</p>
     */
    value: number | undefined;
    /**
     * <p>Units of an EIRP.</p>
     */
    units: EirpUnits | string | undefined;
}
export declare namespace Eirp {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Eirp) => any;
}
/**
 * <p>Information about the uplink <code>Config</code> of an antenna.</p>
 */
export interface AntennaUplinkConfig {
    /**
     * <p>Whether or not uplink transmit is disabled.</p>
     */
    transmitDisabled?: boolean;
    /**
     * <p>Information about the uplink spectral <code>Config</code>.</p>
     */
    spectrumConfig: UplinkSpectrumConfig | undefined;
    /**
     * <p>EIRP of the target.</p>
     */
    targetEirp: Eirp | undefined;
}
export declare namespace AntennaUplinkConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AntennaUplinkConfig) => any;
}
/**
 * <p/>
 */
export interface CancelContactRequest {
    /**
     * <p>UUID of a contact.</p>
     */
    contactId: string | undefined;
}
export declare namespace CancelContactRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelContactRequest) => any;
}
/**
 * <p/>
 */
export interface ContactIdResponse {
    /**
     * <p>UUID of a contact.</p>
     */
    contactId?: string;
}
export declare namespace ContactIdResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContactIdResponse) => any;
}
/**
 * <p>Dependency encountered an error.</p>
 */
export interface DependencyException extends __SmithyException, $MetadataBearer {
    name: "DependencyException";
    $fault: "server";
    message?: string;
    /**
     * <p/>
     */
    parameterName?: string;
}
export declare namespace DependencyException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DependencyException) => any;
}
/**
 * <p>One or more parameters are not valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterException";
    $fault: "client";
    message?: string;
    /**
     * <p/>
     */
    parameterName?: string;
}
export declare namespace InvalidParameterException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterException) => any;
}
/**
 * <p>Resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export declare enum ConfigCapabilityType {
    ANTENNA_DOWNLINK = "antenna-downlink",
    ANTENNA_DOWNLINK_DEMOD_DECODE = "antenna-downlink-demod-decode",
    ANTENNA_UPLINK = "antenna-uplink",
    DATAFLOW_ENDPOINT = "dataflow-endpoint",
    S3_RECORDING = "s3-recording",
    TRACKING = "tracking",
    UPLINK_ECHO = "uplink-echo"
}
/**
 * <p/>
 */
export interface ConfigIdResponse {
    /**
     * <p>UUID of a <code>Config</code>.</p>
     */
    configId?: string;
    /**
     * <p>Type of a <code>Config</code>.</p>
     */
    configType?: ConfigCapabilityType | string;
    /**
     * <p>ARN of a <code>Config</code>.</p>
     */
    configArn?: string;
}
export declare namespace ConfigIdResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfigIdResponse) => any;
}
/**
 * <p>Information about the dataflow endpoint <code>Config</code>.</p>
 */
export interface DataflowEndpointConfig {
    /**
     * <p>Name of a dataflow endpoint.</p>
     */
    dataflowEndpointName: string | undefined;
    /**
     * <p>Region of a dataflow endpoint.</p>
     */
    dataflowEndpointRegion?: string;
}
export declare namespace DataflowEndpointConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataflowEndpointConfig) => any;
}
/**
 * <p>Information about an S3 recording <code>Config</code>.</p>
 */
export interface S3RecordingConfig {
    /**
     * <p>ARN of the bucket to record to.</p>
     */
    bucketArn: string | undefined;
    /**
     * <p>ARN of the role Ground Station assumes to write data to the bucket.</p>
     */
    roleArn: string | undefined;
    /**
     * <p>S3 Key prefix to prefice data files.</p>
     */
    prefix?: string;
}
export declare namespace S3RecordingConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3RecordingConfig) => any;
}
export declare enum Criticality {
    PREFERRED = "PREFERRED",
    REMOVED = "REMOVED",
    REQUIRED = "REQUIRED"
}
/**
 * <p>Object that determines whether tracking should be used during a contact
 *          executed with this <code>Config</code> in the mission profile.</p>
 */
export interface TrackingConfig {
    /**
     * <p>Current setting for autotrack.</p>
     */
    autotrack: Criticality | string | undefined;
}
export declare namespace TrackingConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TrackingConfig) => any;
}
/**
 * <p>Information about an uplink echo <code>Config</code>.</p>
 *          <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the
 *          specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code>
 *          is used in a contact.</p>
 */
export interface UplinkEchoConfig {
    /**
     * <p>Whether or not an uplink <code>Config</code> is enabled.</p>
     */
    enabled: boolean | undefined;
    /**
     * <p>ARN of an uplink <code>Config</code>.</p>
     */
    antennaUplinkConfigArn: string | undefined;
}
export declare namespace UplinkEchoConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UplinkEchoConfig) => any;
}
/**
 * <p>Object containing the parameters of a <code>Config</code>.</p>
 *          <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
 */
export declare type ConfigTypeData = ConfigTypeData.AntennaDownlinkConfigMember | ConfigTypeData.AntennaDownlinkDemodDecodeConfigMember | ConfigTypeData.AntennaUplinkConfigMember | ConfigTypeData.DataflowEndpointConfigMember | ConfigTypeData.S3RecordingConfigMember | ConfigTypeData.TrackingConfigMember | ConfigTypeData.UplinkEchoConfigMember | ConfigTypeData.$UnknownMember;
export declare namespace ConfigTypeData {
    /**
     * <p>Information about how AWS Ground Station should configure an antenna for downlink during a contact.</p>
     */
    interface AntennaDownlinkConfigMember {
        antennaDownlinkConfig: AntennaDownlinkConfig;
        trackingConfig?: never;
        dataflowEndpointConfig?: never;
        antennaDownlinkDemodDecodeConfig?: never;
        antennaUplinkConfig?: never;
        uplinkEchoConfig?: never;
        s3RecordingConfig?: never;
        $unknown?: never;
    }
    /**
     * <p>Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. </p>
     */
    interface TrackingConfigMember {
        antennaDownlinkConfig?: never;
        trackingConfig: TrackingConfig;
        dataflowEndpointConfig?: never;
        antennaDownlinkDemodDecodeConfig?: never;
        antennaUplinkConfig?: never;
        uplinkEchoConfig?: never;
        s3RecordingConfig?: never;
        $unknown?: never;
    }
    /**
     * <p>Information about the dataflow endpoint <code>Config</code>.</p>
     */
    interface DataflowEndpointConfigMember {
        antennaDownlinkConfig?: never;
        trackingConfig?: never;
        dataflowEndpointConfig: DataflowEndpointConfig;
        antennaDownlinkDemodDecodeConfig?: never;
        antennaUplinkConfig?: never;
        uplinkEchoConfig?: never;
        s3RecordingConfig?: never;
        $unknown?: never;
    }
    /**
     * <p>Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.</p>
     */
    interface AntennaDownlinkDemodDecodeConfigMember {
        antennaDownlinkConfig?: never;
        trackingConfig?: never;
        dataflowEndpointConfig?: never;
        antennaDownlinkDemodDecodeConfig: AntennaDownlinkDemodDecodeConfig;
        antennaUplinkConfig?: never;
        uplinkEchoConfig?: never;
        s3RecordingConfig?: never;
        $unknown?: never;
    }
    /**
     * <p>Information about how AWS Ground Station should conﬁgure an antenna for uplink during a contact.</p>
     */
    interface AntennaUplinkConfigMember {
        antennaDownlinkConfig?: never;
        trackingConfig?: never;
        dataflowEndpointConfig?: never;
        antennaDownlinkDemodDecodeConfig?: never;
        antennaUplinkConfig: AntennaUplinkConfig;
        uplinkEchoConfig?: never;
        s3RecordingConfig?: never;
        $unknown?: never;
    }
    /**
     * <p>Information about an uplink echo <code>Config</code>.</p>
     *          <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
     */
    interface UplinkEchoConfigMember {
        antennaDownlinkConfig?: never;
        trackingConfig?: never;
        dataflowEndpointConfig?: never;
        antennaDownlinkDemodDecodeConfig?: never;
        antennaUplinkConfig?: never;
        uplinkEchoConfig: UplinkEchoConfig;
        s3RecordingConfig?: never;
        $unknown?: never;
    }
    /**
     * <p>Information about an S3 recording <code>Config</code>.</p>
     */
    interface S3RecordingConfigMember {
        antennaDownlinkConfig?: never;
        trackingConfig?: never;
        dataflowEndpointConfig?: never;
        antennaDownlinkDemodDecodeConfig?: never;
        antennaUplinkConfig?: never;
        uplinkEchoConfig?: never;
        s3RecordingConfig: S3RecordingConfig;
        $unknown?: never;
    }
    interface $UnknownMember {
        antennaDownlinkConfig?: never;
        trackingConfig?: never;
        dataflowEndpointConfig?: never;
        antennaDownlinkDemodDecodeConfig?: never;
        antennaUplinkConfig?: never;
        uplinkEchoConfig?: never;
        s3RecordingConfig?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        antennaDownlinkConfig: (value: AntennaDownlinkConfig) => T;
        trackingConfig: (value: TrackingConfig) => T;
        dataflowEndpointConfig: (value: DataflowEndpointConfig) => T;
        antennaDownlinkDemodDecodeConfig: (value: AntennaDownlinkDemodDecodeConfig) => T;
        antennaUplinkConfig: (value: AntennaUplinkConfig) => T;
        uplinkEchoConfig: (value: UplinkEchoConfig) => T;
        s3RecordingConfig: (value: S3RecordingConfig) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: ConfigTypeData, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfigTypeData) => any;
}
/**
 * <p/>
 */
export interface CreateConfigRequest {
    /**
     * <p>Name of a <code>Config</code>.</p>
     */
    name: string | undefined;
    /**
     * <p>Parameters of a <code>Config</code>.</p>
     */
    configData: ConfigTypeData | undefined;
    /**
     * <p>Tags assigned to a <code>Config</code>.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConfigRequest) => any;
}
/**
 * <p>Account limits for this resource have been exceeded.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "ResourceLimitExceededException";
    $fault: "client";
    message?: string;
    /**
     * <p/>
     */
    parameterName?: string;
}
export declare namespace ResourceLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceLimitExceededException) => any;
}
/**
 * <p/>
 */
export interface DeleteConfigRequest {
    /**
     * <p>UUID of a <code>Config</code>.</p>
     */
    configId: string | undefined;
    /**
     * <p>Type of a <code>Config</code>.</p>
     */
    configType: ConfigCapabilityType | string | undefined;
}
export declare namespace DeleteConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteConfigRequest) => any;
}
/**
 * <p/>
 */
export interface GetConfigRequest {
    /**
     * <p>UUID of a <code>Config</code>.</p>
     */
    configId: string | undefined;
    /**
     * <p>Type of a <code>Config</code>.</p>
     */
    configType: ConfigCapabilityType | string | undefined;
}
export declare namespace GetConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetConfigRequest) => any;
}
/**
 * <p/>
 */
export interface GetConfigResponse {
    /**
     * <p>UUID of a <code>Config</code>.</p>
     */
    configId: string | undefined;
    /**
     * <p>ARN of a <code>Config</code>
     *          </p>
     */
    configArn: string | undefined;
    /**
     * <p>Name of a <code>Config</code>.</p>
     */
    name: string | undefined;
    /**
     * <p>Type of a <code>Config</code>.</p>
     */
    configType?: ConfigCapabilityType | string;
    /**
     * <p>Data elements in a <code>Config</code>.</p>
     */
    configData: ConfigTypeData | undefined;
    /**
     * <p>Tags assigned to a <code>Config</code>.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetConfigResponse) => any;
}
/**
 * <p/>
 */
export interface ListConfigsRequest {
    /**
     * <p>Maximum number of <code>Configs</code> returned.</p>
     */
    maxResults?: number;
    /**
     * <p>Next token returned in the request of a previous <code>ListConfigs</code> call. Used to get the next page of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListConfigsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListConfigsRequest) => any;
}
/**
 * <p>An item in a list of <code>Config</code> objects.</p>
 */
export interface ConfigListItem {
    /**
     * <p>UUID of a <code>Config</code>.</p>
     */
    configId?: string;
    /**
     * <p>Type of a <code>Config</code>.</p>
     */
    configType?: ConfigCapabilityType | string;
    /**
     * <p>ARN of a <code>Config</code>.</p>
     */
    configArn?: string;
    /**
     * <p>Name of a <code>Config</code>.</p>
     */
    name?: string;
}
export declare namespace ConfigListItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfigListItem) => any;
}
/**
 * <p/>
 */
export interface ListConfigsResponse {
    /**
     * <p>Next token returned in the response of a previous <code>ListConfigs</code> call. Used to get the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>List of <code>Config</code> items.</p>
     */
    configList?: ConfigListItem[];
}
export declare namespace ListConfigsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListConfigsResponse) => any;
}
/**
 * <p/>
 */
export interface UpdateConfigRequest {
    /**
     * <p>UUID of a <code>Config</code>.</p>
     */
    configId: string | undefined;
    /**
     * <p>Name of a <code>Config</code>.</p>
     */
    name: string | undefined;
    /**
     * <p>Type of a <code>Config</code>.</p>
     */
    configType: ConfigCapabilityType | string | undefined;
    /**
     * <p>Parameters of a <code>Config</code>.</p>
     */
    configData: ConfigTypeData | undefined;
}
export declare namespace UpdateConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConfigRequest) => any;
}
/**
 * <p>Information about the socket address.</p>
 */
export interface SocketAddress {
    /**
     * <p>Name of a socket address.</p>
     */
    name: string | undefined;
    /**
     * <p>Port of a socket address.</p>
     */
    port: number | undefined;
}
export declare namespace SocketAddress {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SocketAddress) => any;
}
export declare enum EndpointStatus {
    created = "created",
    creating = "creating",
    deleted = "deleted",
    deleting = "deleting",
    failed = "failed"
}
/**
 * <p>Information about a dataflow endpoint.</p>
 */
export interface DataflowEndpoint {
    /**
     * <p>Name of a dataflow endpoint.</p>
     */
    name?: string;
    /**
     * <p>Socket address of a dataflow endpoint.</p>
     */
    address?: SocketAddress;
    /**
     * <p>Status of a dataflow endpoint.</p>
     */
    status?: EndpointStatus | string;
    /**
     * <p>Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.</p>
     */
    mtu?: number;
}
export declare namespace DataflowEndpoint {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataflowEndpoint) => any;
}
/**
 * <p>Information about endpoints.</p>
 */
export interface SecurityDetails {
    /**
     * <p>A list of subnets where AWS Ground Station places elastic network interfaces to send streams to your instances.</p>
     */
    subnetIds: string[] | undefined;
    /**
     * <p>The security groups to attach to the elastic network interfaces.</p>
     */
    securityGroupIds: string[] | undefined;
    /**
     * <p>ARN to a role needed for connecting streams to your instances. </p>
     */
    roleArn: string | undefined;
}
export declare namespace SecurityDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SecurityDetails) => any;
}
/**
 * <p>Information about the endpoint details.</p>
 */
export interface EndpointDetails {
    /**
     * <p>Endpoint security details.</p>
     */
    securityDetails?: SecurityDetails;
    /**
     * <p>A dataflow endpoint.</p>
     */
    endpoint?: DataflowEndpoint;
}
export declare namespace EndpointDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EndpointDetails) => any;
}
/**
 * <p>Details about an S3 recording <code>Config</code> used in a contact.</p>
 */
export interface S3RecordingDetails {
    /**
     * <p>ARN of the bucket used.</p>
     */
    bucketArn?: string;
    /**
     * <p>Template of the S3 key used.</p>
     */
    keyTemplate?: string;
}
export declare namespace S3RecordingDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3RecordingDetails) => any;
}
/**
 * <p>Details for certain <code>Config</code> object types in a contact.</p>
 */
export declare type ConfigDetails = ConfigDetails.AntennaDemodDecodeDetailsMember | ConfigDetails.EndpointDetailsMember | ConfigDetails.S3RecordingDetailsMember | ConfigDetails.$UnknownMember;
export declare namespace ConfigDetails {
    /**
     * <p>Information about the endpoint details.</p>
     */
    interface EndpointDetailsMember {
        endpointDetails: EndpointDetails;
        antennaDemodDecodeDetails?: never;
        s3RecordingDetails?: never;
        $unknown?: never;
    }
    /**
     * <p>Details for antenna demod decode <code>Config</code> in a contact.</p>
     */
    interface AntennaDemodDecodeDetailsMember {
        endpointDetails?: never;
        antennaDemodDecodeDetails: AntennaDemodDecodeDetails;
        s3RecordingDetails?: never;
        $unknown?: never;
    }
    /**
     * <p>Details for an S3 recording <code>Config</code> in a contact.</p>
     */
    interface S3RecordingDetailsMember {
        endpointDetails?: never;
        antennaDemodDecodeDetails?: never;
        s3RecordingDetails: S3RecordingDetails;
        $unknown?: never;
    }
    interface $UnknownMember {
        endpointDetails?: never;
        antennaDemodDecodeDetails?: never;
        s3RecordingDetails?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        endpointDetails: (value: EndpointDetails) => T;
        antennaDemodDecodeDetails: (value: AntennaDemodDecodeDetails) => T;
        s3RecordingDetails: (value: S3RecordingDetails) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: ConfigDetails, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfigDetails) => any;
}
/**
 * <p/>
 */
export interface DescribeContactRequest {
    /**
     * <p>UUID of a contact.</p>
     */
    contactId: string | undefined;
}
export declare namespace DescribeContactRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeContactRequest) => any;
}
export declare enum ContactStatus {
    AVAILABLE = "AVAILABLE",
    AWS_CANCELLED = "AWS_CANCELLED",
    AWS_FAILED = "AWS_FAILED",
    CANCELLED = "CANCELLED",
    CANCELLING = "CANCELLING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    FAILED_TO_SCHEDULE = "FAILED_TO_SCHEDULE",
    PASS = "PASS",
    POSTPASS = "POSTPASS",
    PREPASS = "PREPASS",
    SCHEDULED = "SCHEDULED",
    SCHEDULING = "SCHEDULING"
}
/**
 * <p>Dataflow details for the destination side.</p>
 */
export interface Destination {
    /**
     * <p>Type of a <code>Config</code>.</p>
     */
    configType?: ConfigCapabilityType | string;
    /**
     * <p>UUID of a <code>Config</code>.</p>
     */
    configId?: string;
    /**
     * <p>Additional details for a <code>Config</code>, if type is dataflow endpoint or antenna demod decode.</p>
     */
    configDetails?: ConfigDetails;
    /**
     * <p>Region of a dataflow destination.</p>
     */
    dataflowDestinationRegion?: string;
}
export declare namespace Destination {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Destination) => any;
}
/**
 * <p>Dataflow details for the source side.</p>
 */
export interface Source {
    /**
     * <p>Type of a <code>Config</code>.</p>
     */
    configType?: ConfigCapabilityType | string;
    /**
     * <p>UUID of a <code>Config</code>.</p>
     */
    configId?: string;
    /**
     * <p>Additional details for a <code>Config</code>, if type is dataflow endpoint or antenna demod decode.</p>
     */
    configDetails?: ConfigDetails;
    /**
     * <p>Region of a dataflow source.</p>
     */
    dataflowSourceRegion?: string;
}
export declare namespace Source {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Source) => any;
}
/**
 * <p>Information about a dataflow edge used in a contact.</p>
 */
export interface DataflowDetail {
    /**
     * <p>Dataflow details for the source side.</p>
     */
    source?: Source;
    /**
     * <p>Dataflow details for the destination side.</p>
     */
    destination?: Destination;
    /**
     * <p>Error message for a dataflow.</p>
     */
    errorMessage?: string;
}
export declare namespace DataflowDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataflowDetail) => any;
}
/**
 * <p>Elevation angle of the satellite in the sky during a contact.</p>
 */
export interface Elevation {
    /**
     * <p>Elevation angle value.</p>
     */
    value: number | undefined;
    /**
     * <p>Elevation angle units.</p>
     */
    unit: AngleUnits | string | undefined;
}
export declare namespace Elevation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Elevation) => any;
}
/**
 * <p/>
 */
export interface DescribeContactResponse {
    /**
     * <p>UUID of a contact.</p>
     */
    contactId?: string;
    /**
     * <p>ARN of a mission profile.</p>
     */
    missionProfileArn?: string;
    /**
     * <p>ARN of a satellite.</p>
     */
    satelliteArn?: string;
    /**
     * <p>Start time of a contact.</p>
     */
    startTime?: Date;
    /**
     * <p>End time of a contact.</p>
     */
    endTime?: Date;
    /**
     * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
     */
    prePassStartTime?: Date;
    /**
     * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
     */
    postPassEndTime?: Date;
    /**
     * <p>Ground station for a contact.</p>
     */
    groundStation?: string;
    /**
     * <p>Status of a contact.</p>
     */
    contactStatus?: ContactStatus | string;
    /**
     * <p>Error message for a contact.</p>
     */
    errorMessage?: string;
    /**
     * <p>Maximum elevation angle of a contact.</p>
     */
    maximumElevation?: Elevation;
    /**
     * <p>Tags assigned to a contact.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>Region of a contact.</p>
     */
    region?: string;
    /**
     * <p>List describing source and destination details for each dataflow edge.</p>
     */
    dataflowList?: DataflowDetail[];
}
export declare namespace DescribeContactResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeContactResponse) => any;
}
/**
 * <p/>
 */
export interface ListContactsRequest {
    /**
     * <p>Maximum number of contacts returned.</p>
     */
    maxResults?: number;
    /**
     * <p>Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>Status of a contact reservation.</p>
     */
    statusList: (ContactStatus | string)[] | undefined;
    /**
     * <p>Start time of a contact.</p>
     */
    startTime: Date | undefined;
    /**
     * <p>End time of a contact.</p>
     */
    endTime: Date | undefined;
    /**
     * <p>Name of a ground station.</p>
     */
    groundStation?: string;
    /**
     * <p>ARN of a satellite.</p>
     */
    satelliteArn?: string;
    /**
     * <p>ARN of a mission profile.</p>
     */
    missionProfileArn?: string;
}
export declare namespace ListContactsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListContactsRequest) => any;
}
/**
 * <p>Data describing a contact.</p>
 */
export interface ContactData {
    /**
     * <p>UUID of a contact.</p>
     */
    contactId?: string;
    /**
     * <p>ARN of a mission profile.</p>
     */
    missionProfileArn?: string;
    /**
     * <p>ARN of a satellite.</p>
     */
    satelliteArn?: string;
    /**
     * <p>Start time of a contact.</p>
     */
    startTime?: Date;
    /**
     * <p>End time of a contact.</p>
     */
    endTime?: Date;
    /**
     * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
     */
    prePassStartTime?: Date;
    /**
     * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
     */
    postPassEndTime?: Date;
    /**
     * <p>Name of a ground station.</p>
     */
    groundStation?: string;
    /**
     * <p>Status of a contact.</p>
     */
    contactStatus?: ContactStatus | string;
    /**
     * <p>Error message of a contact.</p>
     */
    errorMessage?: string;
    /**
     * <p>Maximum elevation angle of a contact.</p>
     */
    maximumElevation?: Elevation;
    /**
     * <p>Region of a contact.</p>
     */
    region?: string;
    /**
     * <p>Tags assigned to a contact.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ContactData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContactData) => any;
}
/**
 * <p/>
 */
export interface ListContactsResponse {
    /**
     * <p>Next token returned in the response of a previous <code>ListContacts</code> call. Used to get the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>List of contacts.</p>
     */
    contactList?: ContactData[];
}
export declare namespace ListContactsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListContactsResponse) => any;
}
/**
 * <p/>
 */
export interface ReserveContactRequest {
    /**
     * <p>ARN of a mission profile.</p>
     */
    missionProfileArn: string | undefined;
    /**
     * <p>ARN of a satellite</p>
     */
    satelliteArn: string | undefined;
    /**
     * <p>Start time of a contact.</p>
     */
    startTime: Date | undefined;
    /**
     * <p>End time of a contact.</p>
     */
    endTime: Date | undefined;
    /**
     * <p>Name of a ground station.</p>
     */
    groundStation: string | undefined;
    /**
     * <p>Tags assigned to a contact.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ReserveContactRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReserveContactRequest) => any;
}
/**
 * <p/>
 */
export interface CreateDataflowEndpointGroupRequest {
    /**
     * <p>Endpoint details of each endpoint in the dataflow endpoint group.</p>
     */
    endpointDetails: EndpointDetails[] | undefined;
    /**
     * <p>Tags of a dataflow endpoint group.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateDataflowEndpointGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDataflowEndpointGroupRequest) => any;
}
/**
 * <p/>
 */
export interface DataflowEndpointGroupIdResponse {
    /**
     * <p>UUID of a dataflow endpoint group.</p>
     */
    dataflowEndpointGroupId?: string;
}
export declare namespace DataflowEndpointGroupIdResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataflowEndpointGroupIdResponse) => any;
}
/**
 * <p/>
 */
export interface CreateMissionProfileRequest {
    /**
     * <p>Name of a mission profile.</p>
     */
    name: string | undefined;
    /**
     * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
     */
    contactPrePassDurationSeconds?: number;
    /**
     * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
     */
    contactPostPassDurationSeconds?: number;
    /**
     * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
     */
    minimumViableContactDurationSeconds: number | undefined;
    /**
     * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i>
     *             <code>Config</code> and a <i>to</i>
     *             <code>Config</code>.</p>
     */
    dataflowEdges: string[][] | undefined;
    /**
     * <p>ARN of a tracking <code>Config</code>.</p>
     */
    trackingConfigArn: string | undefined;
    /**
     * <p>Tags assigned to a mission profile.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateMissionProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMissionProfileRequest) => any;
}
/**
 * <p/>
 */
export interface MissionProfileIdResponse {
    /**
     * <p>UUID of a mission profile.</p>
     */
    missionProfileId?: string;
}
export declare namespace MissionProfileIdResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MissionProfileIdResponse) => any;
}
/**
 * <p/>
 */
export interface DeleteDataflowEndpointGroupRequest {
    /**
     * <p>UUID of a dataflow endpoint group.</p>
     */
    dataflowEndpointGroupId: string | undefined;
}
export declare namespace DeleteDataflowEndpointGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDataflowEndpointGroupRequest) => any;
}
/**
 * <p/>
 */
export interface GetDataflowEndpointGroupRequest {
    /**
     * <p>UUID of a dataflow endpoint group.</p>
     */
    dataflowEndpointGroupId: string | undefined;
}
export declare namespace GetDataflowEndpointGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDataflowEndpointGroupRequest) => any;
}
/**
 * <p/>
 */
export interface GetDataflowEndpointGroupResponse {
    /**
     * <p>UUID of a dataflow endpoint group.</p>
     */
    dataflowEndpointGroupId?: string;
    /**
     * <p>ARN of a dataflow endpoint group.</p>
     */
    dataflowEndpointGroupArn?: string;
    /**
     * <p>Details of a dataflow endpoint.</p>
     */
    endpointsDetails?: EndpointDetails[];
    /**
     * <p>Tags assigned to a dataflow endpoint group.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetDataflowEndpointGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDataflowEndpointGroupResponse) => any;
}
/**
 * <p/>
 */
export interface ListDataflowEndpointGroupsRequest {
    /**
     * <p>Maximum number of dataflow endpoint groups returned.</p>
     */
    maxResults?: number;
    /**
     * <p>Next token returned in the request of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListDataflowEndpointGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDataflowEndpointGroupsRequest) => any;
}
/**
 * <p>Item in a list of <code>DataflowEndpoint</code> groups.</p>
 */
export interface DataflowEndpointListItem {
    /**
     * <p>UUID of a dataflow endpoint group.</p>
     */
    dataflowEndpointGroupId?: string;
    /**
     * <p>ARN of a dataflow endpoint group.</p>
     */
    dataflowEndpointGroupArn?: string;
}
export declare namespace DataflowEndpointListItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataflowEndpointListItem) => any;
}
/**
 * <p/>
 */
export interface ListDataflowEndpointGroupsResponse {
    /**
     * <p>Next token returned in the response of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>A list of dataflow endpoint groups.</p>
     */
    dataflowEndpointGroupList?: DataflowEndpointListItem[];
}
export declare namespace ListDataflowEndpointGroupsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDataflowEndpointGroupsResponse) => any;
}
/**
 * <p/>
 */
export interface DeleteMissionProfileRequest {
    /**
     * <p>UUID of a mission profile.</p>
     */
    missionProfileId: string | undefined;
}
export declare namespace DeleteMissionProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteMissionProfileRequest) => any;
}
/**
 * <p/>
 */
export interface GetMinuteUsageRequest {
    /**
     * <p>The month being requested, with a value of 1-12.</p>
     */
    month: number | undefined;
    /**
     * <p>The year being requested, in the format of YYYY.</p>
     */
    year: number | undefined;
}
export declare namespace GetMinuteUsageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMinuteUsageRequest) => any;
}
/**
 * <p/>
 */
export interface GetMinuteUsageResponse {
    /**
     * <p>Returns whether or not an account has signed up for the reserved minutes pricing plan, specific to the month being requested.</p>
     */
    isReservedMinutesCustomer?: boolean;
    /**
     * <p>Total number of reserved minutes allocated, specific to the month being requested.</p>
     */
    totalReservedMinuteAllocation?: number;
    /**
     * <p>Upcoming minutes scheduled for an account, specific to the month being requested.</p>
     */
    upcomingMinutesScheduled?: number;
    /**
     * <p>Total scheduled minutes for an account, specific to the month being requested.</p>
     */
    totalScheduledMinutes?: number;
    /**
     * <p>Estimated number of minutes remaining for an account, specific to the month being requested.</p>
     */
    estimatedMinutesRemaining?: number;
}
export declare namespace GetMinuteUsageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMinuteUsageResponse) => any;
}
/**
 * <p/>
 */
export interface GetMissionProfileRequest {
    /**
     * <p>UUID of a mission profile.</p>
     */
    missionProfileId: string | undefined;
}
export declare namespace GetMissionProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMissionProfileRequest) => any;
}
/**
 * <p/>
 */
export interface GetMissionProfileResponse {
    /**
     * <p>UUID of a mission profile.</p>
     */
    missionProfileId?: string;
    /**
     * <p>ARN of a mission profile.</p>
     */
    missionProfileArn?: string;
    /**
     * <p>Name of a mission profile.</p>
     */
    name?: string;
    /**
     * <p>Region of a mission profile.</p>
     */
    region?: string;
    /**
     * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
     */
    contactPrePassDurationSeconds?: number;
    /**
     * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
     */
    contactPostPassDurationSeconds?: number;
    /**
     * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
     */
    minimumViableContactDurationSeconds?: number;
    /**
     * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i>
     *             <code>Config</code> and a <i>to</i>
     *             <code>Config</code>.</p>
     */
    dataflowEdges?: string[][];
    /**
     * <p>ARN of a tracking <code>Config</code>.</p>
     */
    trackingConfigArn?: string;
    /**
     * <p>Tags assigned to a mission profile.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetMissionProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMissionProfileResponse) => any;
}
/**
 * <p/>
 */
export interface GetSatelliteRequest {
    /**
     * <p>UUID of a satellite.</p>
     */
    satelliteId: string | undefined;
}
export declare namespace GetSatelliteRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSatelliteRequest) => any;
}
/**
 * <p/>
 */
export interface GetSatelliteResponse {
    /**
     * <p>UUID of a satellite.</p>
     */
    satelliteId?: string;
    /**
     * <p>ARN of a satellite.</p>
     */
    satelliteArn?: string;
    /**
     * <p>NORAD satellite ID number.</p>
     */
    noradSatelliteID?: number;
    /**
     * <p>A list of ground stations to which the satellite is on-boarded.</p>
     */
    groundStations?: string[];
}
export declare namespace GetSatelliteResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSatelliteResponse) => any;
}
/**
 * <p/>
 */
export interface ListGroundStationsRequest {
    /**
     * <p>Satellite ID to retrieve on-boarded ground stations.</p>
     */
    satelliteId?: string;
    /**
     * <p>Maximum number of ground stations returned.</p>
     */
    maxResults?: number;
    /**
     * <p>Next token that can be supplied in the next call to get the next page of ground stations.</p>
     */
    nextToken?: string;
}
export declare namespace ListGroundStationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGroundStationsRequest) => any;
}
/**
 * <p>Information about the ground station data.</p>
 */
export interface GroundStationData {
    /**
     * <p>UUID of a ground station.</p>
     */
    groundStationId?: string;
    /**
     * <p>Name of a ground station.</p>
     */
    groundStationName?: string;
    /**
     * <p>Ground station Region.</p>
     */
    region?: string;
}
export declare namespace GroundStationData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GroundStationData) => any;
}
/**
 * <p/>
 */
export interface ListGroundStationsResponse {
    /**
     * <p>Next token that can be supplied in the next call to get the next page of ground stations.</p>
     */
    nextToken?: string;
    /**
     * <p>List of ground stations.</p>
     */
    groundStationList?: GroundStationData[];
}
export declare namespace ListGroundStationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGroundStationsResponse) => any;
}
/**
 * <p/>
 */
export interface ListTagsForResourceRequest {
    /**
     * <p>ARN of a resource.</p>
     */
    resourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
/**
 * <p/>
 */
export interface ListTagsForResourceResponse {
    /**
     * <p>Tags assigned to a resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
/**
 * <p/>
 */
export interface ListMissionProfilesRequest {
    /**
     * <p>Maximum number of mission profiles returned.</p>
     */
    maxResults?: number;
    /**
     * <p>Next token returned in the request of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListMissionProfilesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMissionProfilesRequest) => any;
}
/**
 * <p>Item in a list of mission profiles.</p>
 */
export interface MissionProfileListItem {
    /**
     * <p>UUID of a mission profile.</p>
     */
    missionProfileId?: string;
    /**
     * <p>ARN of a mission profile.</p>
     */
    missionProfileArn?: string;
    /**
     * <p>Region of a mission profile.</p>
     */
    region?: string;
    /**
     * <p>Name of a mission profile.</p>
     */
    name?: string;
}
export declare namespace MissionProfileListItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MissionProfileListItem) => any;
}
/**
 * <p/>
 */
export interface ListMissionProfilesResponse {
    /**
     * <p>Next token returned in the response of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>List of mission profiles.</p>
     */
    missionProfileList?: MissionProfileListItem[];
}
export declare namespace ListMissionProfilesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMissionProfilesResponse) => any;
}
/**
 * <p/>
 */
export interface UpdateMissionProfileRequest {
    /**
     * <p>UUID of a mission profile.</p>
     */
    missionProfileId: string | undefined;
    /**
     * <p>Name of a mission profile.</p>
     */
    name?: string;
    /**
     * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
     */
    contactPrePassDurationSeconds?: number;
    /**
     * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
     */
    contactPostPassDurationSeconds?: number;
    /**
     * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
     */
    minimumViableContactDurationSeconds?: number;
    /**
     * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i>
     *             <code>Config</code> and a <i>to</i>
     *             <code>Config</code>.</p>
     */
    dataflowEdges?: string[][];
    /**
     * <p>ARN of a tracking <code>Config</code>.</p>
     */
    trackingConfigArn?: string;
}
export declare namespace UpdateMissionProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateMissionProfileRequest) => any;
}
/**
 * <p/>
 */
export interface ListSatellitesRequest {
    /**
     * <p>Maximum number of satellites returned.</p>
     */
    maxResults?: number;
    /**
     * <p>Next token that can be supplied in the next call to get the next page of satellites.</p>
     */
    nextToken?: string;
}
export declare namespace ListSatellitesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSatellitesRequest) => any;
}
/**
 * <p>Item in a list of satellites.</p>
 */
export interface SatelliteListItem {
    /**
     * <p>UUID of a satellite.</p>
     */
    satelliteId?: string;
    /**
     * <p>ARN of a satellite.</p>
     */
    satelliteArn?: string;
    /**
     * <p>NORAD satellite ID number.</p>
     */
    noradSatelliteID?: number;
    /**
     * <p>A list of ground stations to which the satellite is on-boarded.</p>
     */
    groundStations?: string[];
}
export declare namespace SatelliteListItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SatelliteListItem) => any;
}
/**
 * <p/>
 */
export interface ListSatellitesResponse {
    /**
     * <p>Next token that can be supplied in the next call to get the next page of satellites.</p>
     */
    nextToken?: string;
    /**
     * <p>List of satellites.</p>
     */
    satellites?: SatelliteListItem[];
}
export declare namespace ListSatellitesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSatellitesResponse) => any;
}
/**
 * <p/>
 */
export interface TagResourceRequest {
    /**
     * <p>ARN of a resource tag.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>Tags assigned to a resource.</p>
     */
    tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
/**
 * <p/>
 */
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
/**
 * <p/>
 */
export interface UntagResourceRequest {
    /**
     * <p>ARN of a resource.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>Keys of a resource tag.</p>
     */
    tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
/**
 * <p/>
 */
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
