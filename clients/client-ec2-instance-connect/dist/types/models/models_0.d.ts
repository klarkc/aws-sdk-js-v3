import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Either your AWS credentials are not valid or you do not have access to the EC2 instance.</p>
 */
export interface AuthException extends __SmithyException, $MetadataBearer {
    name: "AuthException";
    $fault: "client";
    Message?: string;
}
export declare namespace AuthException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AuthException) => any;
}
/**
 * <p>The specified instance was not found.</p>
 */
export interface EC2InstanceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "EC2InstanceNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace EC2InstanceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EC2InstanceNotFoundException) => any;
}
/**
 * <p>The instance type is not supported for connecting via the serial console. Only Nitro
 *             instance types are currently supported.</p>
 */
export interface EC2InstanceTypeInvalidException extends __SmithyException, $MetadataBearer {
    name: "EC2InstanceTypeInvalidException";
    $fault: "client";
    Message?: string;
}
export declare namespace EC2InstanceTypeInvalidException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EC2InstanceTypeInvalidException) => any;
}
/**
 * <p>One of the parameters is not valid.</p>
 */
export interface InvalidArgsException extends __SmithyException, $MetadataBearer {
    name: "InvalidArgsException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidArgsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidArgsException) => any;
}
export interface SendSerialConsoleSSHPublicKeyRequest {
    /**
     * <p>The ID of the EC2 instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The serial port of the EC2 instance. Currently only port 0 is supported.</p>
     *         <p>Default: 0</p>
     */
    SerialPort?: number;
    /**
     * <p>The public key material. To use the public key, you must have the matching private
     *             key. For information about the supported key formats and lengths, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#how-to-generate-your-own-key-and-import-it-to-aws">Requirements for key pairs</a> in the <i>Amazon EC2 User
     *             Guide</i>.</p>
     */
    SSHPublicKey: string | undefined;
}
export declare namespace SendSerialConsoleSSHPublicKeyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SendSerialConsoleSSHPublicKeyRequest) => any;
}
export interface SendSerialConsoleSSHPublicKeyResponse {
    /**
     * <p>The ID of the request. Please provide this ID when contacting AWS Support for assistance.</p>
     */
    RequestId?: string;
    /**
     * <p>Is true if the request succeeds and an error otherwise.</p>
     */
    Success?: boolean;
}
export declare namespace SendSerialConsoleSSHPublicKeyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SendSerialConsoleSSHPublicKeyResponse) => any;
}
/**
 * <p>Your account is not authorized to use the EC2 Serial Console. To authorize your
 *             account, run the EnableSerialConsoleAccess API. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableSerialConsoleAccess.html">EnableSerialConsoleAccess</a> in the <i>Amazon EC2 API Reference</i>.</p>
 */
export interface SerialConsoleAccessDisabledException extends __SmithyException, $MetadataBearer {
    name: "SerialConsoleAccessDisabledException";
    $fault: "client";
    Message?: string;
}
export declare namespace SerialConsoleAccessDisabledException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SerialConsoleAccessDisabledException) => any;
}
/**
 * <p>The instance currently has 1 active serial console session. Only 1 session is supported at a time.</p>
 */
export interface SerialConsoleSessionLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "SerialConsoleSessionLimitExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace SerialConsoleSessionLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SerialConsoleSessionLimitExceededException) => any;
}
/**
 * <p>Unable to start a serial console session. Please try again.</p>
 */
export interface SerialConsoleSessionUnavailableException extends __SmithyException, $MetadataBearer {
    name: "SerialConsoleSessionUnavailableException";
    $fault: "server";
    Message?: string;
}
export declare namespace SerialConsoleSessionUnavailableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SerialConsoleSessionUnavailableException) => any;
}
/**
 * <p>The service encountered an error. Follow the instructions in the error message and try again.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
    name: "ServiceException";
    $fault: "server";
    Message?: string;
}
export declare namespace ServiceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceException) => any;
}
/**
 * <p>The requests were made too frequently and have been throttled. Wait a while and try again.
 *             To increase the limit on your request frequency, contact AWS Support.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    Message?: string;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
export interface SendSSHPublicKeyRequest {
    /**
     * <p>The ID of the EC2 instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The OS user on the EC2 instance for whom the key can be used to authenticate.</p>
     */
    InstanceOSUser: string | undefined;
    /**
     * <p>The public key material. To use the public key, you must have the matching private key.</p>
     */
    SSHPublicKey: string | undefined;
    /**
     * <p>The Availability Zone in which the EC2 instance was launched.</p>
     */
    AvailabilityZone: string | undefined;
}
export declare namespace SendSSHPublicKeyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SendSSHPublicKeyRequest) => any;
}
export interface SendSSHPublicKeyResponse {
    /**
     * <p>The ID of the request. Please provide this ID when contacting AWS Support for assistance.</p>
     */
    RequestId?: string;
    /**
     * <p>Is true if the request succeeds and an error otherwise.</p>
     */
    Success?: boolean;
}
export declare namespace SendSSHPublicKeyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SendSSHPublicKeyResponse) => any;
}
