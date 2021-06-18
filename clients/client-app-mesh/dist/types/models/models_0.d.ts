import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>An object that represents an access log file.</p>
 */
export interface FileAccessLog {
  /**
   * <p>The file path to write access logs to. You can use <code>/dev/stdout</code> to send
   *          access logs to standard out and configure your Envoy container to use a log driver, such as
   *             <code>awslogs</code>, to export the access logs to a log storage service such as Amazon
   *          CloudWatch Logs. You can also specify a path in the Envoy container's file system to write
   *          the files to disk.</p>
   *          <note>
   *             <p>The Envoy process must have write permissions to the path that you specify here.
   *             Otherwise, Envoy fails to bootstrap properly.</p>
   *          </note>
   */
  path: string | undefined;
}
export declare namespace FileAccessLog {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FileAccessLog) => any;
}
/**
 * <p>An object that represents the access logging information for a virtual node.</p>
 */
export declare type AccessLog = AccessLog.FileMember | AccessLog.$UnknownMember;
export declare namespace AccessLog {
  /**
   * <p>The file object to send virtual node access logs to.</p>
   */
  interface FileMember {
    file: FileAccessLog;
    $unknown?: never;
  }
  interface $UnknownMember {
    file?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    file: (value: FileAccessLog) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: AccessLog, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AccessLog) => any;
}
/**
 * <p>The request syntax was malformed. Check your request syntax and try again.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}
export declare namespace BadRequestException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BadRequestException) => any;
}
/**
 * <p>You don't have permissions to perform this action.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  message?: string;
}
export declare namespace ForbiddenException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ForbiddenException) => any;
}
/**
 * <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  $retryable: {};
  message?: string;
}
export declare namespace InternalServerErrorException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InternalServerErrorException) => any;
}
/**
 *
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for.</p>
   */
  resourceArn: string | undefined;
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListTagsForResource</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of tag results returned by <code>ListTagsForResource</code> in
   *          paginated output. When this parameter is used, <code>ListTagsForResource</code> returns
   *          only <code>limit</code> results in a single page along with a <code>nextToken</code>
   *          response element. You can see the remaining results of the initial request by sending
   *          another <code>ListTagsForResource</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 100. If you don't use
   *          this parameter, <code>ListTagsForResource</code> returns up to 100
   *          results and a <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;
}
export declare namespace ListTagsForResourceInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTagsForResourceInput) => any;
}
/**
 * <p>Optional metadata that you apply to a resource to assist with categorization and
 *          organization. Each tag consists of a key and an optional value, both of which you define.
 *          Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 */
export interface TagRef {
  /**
   * <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label
   *          that acts like a category for more specific tag values.</p>
   */
  key: string | undefined;
  /**
   * <p>The optional part of a key-value pair that make up a tag. A <code>value</code> acts as a
   *          descriptor within a tag category (key).</p>
   */
  value: string | undefined;
}
export declare namespace TagRef {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagRef) => any;
}
/**
 *
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags for the resource.</p>
   */
  tags: TagRef[] | undefined;
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListTagsForResource</code>
   *          request. When the results of a <code>ListTagsForResource</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}
export declare namespace ListTagsForResourceOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTagsForResourceOutput) => any;
}
/**
 * <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}
export declare namespace NotFoundException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: NotFoundException) => any;
}
/**
 * <p>The request has failed due to a temporary failure of the service.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  $retryable: {};
  message?: string;
}
export declare namespace ServiceUnavailableException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ServiceUnavailableException) => any;
}
/**
 * <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
 *          account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  $retryable: {
    throttling: true;
  };
  message?: string;
}
export declare namespace TooManyRequestsException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TooManyRequestsException) => any;
}
/**
 * <p>The request contains a client token that was used for a previous update resource call
 *          with different specifications. Try the request again with a new client token.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
}
export declare namespace ConflictException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ConflictException) => any;
}
export declare enum EgressFilterType {
  ALLOW_ALL = "ALLOW_ALL",
  DROP_ALL = "DROP_ALL",
}
/**
 * <p>An object that represents the egress filter rules for a service mesh.</p>
 */
export interface EgressFilter {
  /**
   * <p>The egress filter type. By default, the type is <code>DROP_ALL</code>, which allows
   *          egress only from virtual nodes to other defined resources in the service mesh (and any
   *          traffic to <code>*.amazonaws.com</code> for AWS API calls). You can set the egress filter
   *          type to <code>ALLOW_ALL</code> to allow egress to any endpoint inside or outside of the
   *          service mesh.</p>
   */
  type: EgressFilterType | string | undefined;
}
export declare namespace EgressFilter {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: EgressFilter) => any;
}
/**
 * <p>An object that represents the specification of a service mesh.</p>
 */
export interface MeshSpec {
  /**
   * <p>The egress filter rules for the service mesh.</p>
   */
  egressFilter?: EgressFilter;
}
export declare namespace MeshSpec {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: MeshSpec) => any;
}
/**
 *
 */
export interface CreateMeshInput {
  /**
   * <p>The name to use for the service mesh.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The service mesh specification to apply.</p>
   */
  spec?: MeshSpec;
  /**
   * <p>Optional metadata that you can apply to the service mesh to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
}
export declare namespace CreateMeshInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateMeshInput) => any;
}
/**
 * <p>An object that represents metadata for a resource.</p>
 */
export interface ResourceMetadata {
  /**
   * <p>The full Amazon Resource Name (ARN) for the resource.</p>
   */
  arn: string | undefined;
  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;
  /**
   * <p>The unique identifier for the resource.</p>
   */
  uid: string | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;
  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;
}
export declare namespace ResourceMetadata {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ResourceMetadata) => any;
}
export declare enum MeshStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}
/**
 * <p>An object that represents the status of a service mesh.</p>
 */
export interface MeshStatus {
  /**
   * <p>The current mesh status.</p>
   */
  status?: MeshStatusCode | string;
}
export declare namespace MeshStatus {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: MeshStatus) => any;
}
/**
 * <p>An object that represents a service mesh returned by a describe operation.</p>
 */
export interface MeshData {
  /**
   * <p>The name of the service mesh.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The associated specification for the service mesh.</p>
   */
  spec: MeshSpec | undefined;
  /**
   * <p>The associated metadata for the service mesh.</p>
   */
  metadata: ResourceMetadata | undefined;
  /**
   * <p>The status of the service mesh.</p>
   */
  status: MeshStatus | undefined;
}
export declare namespace MeshData {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: MeshData) => any;
}
/**
 *
 */
export interface CreateMeshOutput {
  /**
   * <p>The full description of your service mesh following the create call.</p>
   */
  mesh: MeshData | undefined;
}
export declare namespace CreateMeshOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateMeshOutput) => any;
}
/**
 * <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service-quotas.html">Service
 *             Limits</a> in the <i>AWS App Mesh User Guide</i>.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}
export declare namespace LimitExceededException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LimitExceededException) => any;
}
/**
 *
 */
export interface DeleteMeshInput {
  /**
   * <p>The name of the service mesh to delete.</p>
   */
  meshName: string | undefined;
}
export declare namespace DeleteMeshInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteMeshInput) => any;
}
/**
 *
 */
export interface DeleteMeshOutput {
  /**
   * <p>The service mesh that was deleted.</p>
   */
  mesh: MeshData | undefined;
}
export declare namespace DeleteMeshOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteMeshOutput) => any;
}
/**
 * <p>You can't delete the specified resource because it's in use or required by another
 *          resource.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}
export declare namespace ResourceInUseException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ResourceInUseException) => any;
}
/**
 *
 */
export interface DescribeMeshInput {
  /**
   * <p>The name of the service mesh to describe.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace DescribeMeshInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeMeshInput) => any;
}
/**
 *
 */
export interface DescribeMeshOutput {
  /**
   * <p>The full description of your service mesh.</p>
   */
  mesh: MeshData | undefined;
}
export declare namespace DescribeMeshOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeMeshOutput) => any;
}
/**
 *
 */
export interface ListMeshesInput {
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListMeshes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results returned by <code>ListMeshes</code> in paginated output.
   *          When you use this parameter, <code>ListMeshes</code> returns only <code>limit</code>
   *          results in a single page along with a <code>nextToken</code> response element. You can see
   *          the remaining results of the initial request by sending another <code>ListMeshes</code>
   *          request with the returned <code>nextToken</code> value. This value can be between
   *          1 and 100. If you don't use this parameter,
   *             <code>ListMeshes</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;
}
export declare namespace ListMeshesInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListMeshesInput) => any;
}
/**
 * <p>An object that represents a service mesh returned by a list operation.</p>
 */
export interface MeshRef {
  /**
   * <p>The name of the service mesh.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;
  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;
  /**
   * <p>The full Amazon Resource Name (ARN) of the service mesh.</p>
   */
  arn: string | undefined;
  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}
export declare namespace MeshRef {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: MeshRef) => any;
}
/**
 *
 */
export interface ListMeshesOutput {
  /**
   * <p>The list of existing service meshes.</p>
   */
  meshes: MeshRef[] | undefined;
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListMeshes</code> request.
   *          When the results of a <code>ListMeshes</code> request exceed <code>limit</code>, you can
   *          use this value to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  nextToken?: string;
}
export declare namespace ListMeshesOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListMeshesOutput) => any;
}
/**
 *
 */
export interface UpdateMeshInput {
  /**
   * <p>The name of the service mesh to update.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The service mesh specification to apply.</p>
   */
  spec?: MeshSpec;
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
}
export declare namespace UpdateMeshInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateMeshInput) => any;
}
/**
 *
 */
export interface UpdateMeshOutput {
  /**
   * <p>An object that represents a service mesh returned by a describe operation.</p>
   */
  mesh: MeshData | undefined;
}
export declare namespace UpdateMeshOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateMeshOutput) => any;
}
/**
 * <p>An object that represents a local file certificate.
 *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
 */
export interface VirtualGatewayListenerTlsFileCertificate {
  /**
   * <p>The certificate chain for the certificate.</p>
   */
  certificateChain: string | undefined;
  /**
   * <p>The private key for a certificate stored on the file system of the mesh endpoint that
   *          the proxy is running on.</p>
   */
  privateKey: string | undefined;
}
export declare namespace VirtualGatewayListenerTlsFileCertificate {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayListenerTlsFileCertificate) => any;
}
/**
 * <p>An object that represents the virtual gateway's listener's Secret Discovery Service
 *          certificate.The proxy must be configured with a local SDS provider via a Unix Domain
 *          Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info. </p>
 */
export interface VirtualGatewayListenerTlsSdsCertificate {
  /**
   * <p>A reference to an object that represents the name of the secret secret requested from
   *          the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or
   *          certificate chain.</p>
   */
  secretName: string | undefined;
}
export declare namespace VirtualGatewayListenerTlsSdsCertificate {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayListenerTlsSdsCertificate) => any;
}
/**
 * <p>An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.</p>
 */
export declare type VirtualGatewayClientTlsCertificate =
  | VirtualGatewayClientTlsCertificate.FileMember
  | VirtualGatewayClientTlsCertificate.SdsMember
  | VirtualGatewayClientTlsCertificate.$UnknownMember;
export declare namespace VirtualGatewayClientTlsCertificate {
  /**
   * <p>An object that represents a local file certificate.
   *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
   */
  interface FileMember {
    file: VirtualGatewayListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>A reference to an object that represents a virtual gateway's client's Secret Discovery
   *          Service certificate.</p>
   */
  interface SdsMember {
    file?: never;
    sds: VirtualGatewayListenerTlsSdsCertificate;
    $unknown?: never;
  }
  interface $UnknownMember {
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    file: (value: VirtualGatewayListenerTlsFileCertificate) => T;
    sds: (value: VirtualGatewayListenerTlsSdsCertificate) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: VirtualGatewayClientTlsCertificate, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayClientTlsCertificate) => any;
}
/**
 * <p>An object that represents the methods by which a subject alternative name on a peer
 *          Transport Layer Security (TLS) certificate can be matched.</p>
 */
export interface SubjectAlternativeNameMatchers {
  /**
   * <p>The values sent must match the specified values exactly.</p>
   */
  exact: string[] | undefined;
}
export declare namespace SubjectAlternativeNameMatchers {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SubjectAlternativeNameMatchers) => any;
}
/**
 * <p>An object that represents the subject alternative names secured by the
 *          certificate.</p>
 */
export interface SubjectAlternativeNames {
  /**
   * <p>An object that represents the criteria for determining a SANs match.</p>
   */
  match: SubjectAlternativeNameMatchers | undefined;
}
export declare namespace SubjectAlternativeNames {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SubjectAlternativeNames) => any;
}
/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certicate Manager (ACM)
 *          certificate.</p>
 */
export interface VirtualGatewayTlsValidationContextAcmTrust {
  /**
   * <p>One or more ACM Amazon Resource Name (ARN)s.</p>
   */
  certificateAuthorityArns: string[] | undefined;
}
export declare namespace VirtualGatewayTlsValidationContextAcmTrust {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayTlsValidationContextAcmTrust) => any;
}
/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
 */
export interface VirtualGatewayTlsValidationContextFileTrust {
  /**
   * <p>The certificate trust chain for a certificate stored on the file system of the virtual
   *          node that the proxy is running on.</p>
   */
  certificateChain: string | undefined;
}
export declare namespace VirtualGatewayTlsValidationContextFileTrust {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayTlsValidationContextFileTrust) => any;
}
/**
 * <p>An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service
 *          validation context trust. The proxy must be configured with a local SDS provider via a Unix
 *          Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info.</p>
 */
export interface VirtualGatewayTlsValidationContextSdsTrust {
  /**
   * <p>A reference to an object that represents the name of the secret for a virtual gateway's
   *          Transport Layer Security (TLS) Secret Discovery Service validation context trust.</p>
   */
  secretName: string | undefined;
}
export declare namespace VirtualGatewayTlsValidationContextSdsTrust {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayTlsValidationContextSdsTrust) => any;
}
/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust.</p>
 */
export declare type VirtualGatewayTlsValidationContextTrust =
  | VirtualGatewayTlsValidationContextTrust.AcmMember
  | VirtualGatewayTlsValidationContextTrust.FileMember
  | VirtualGatewayTlsValidationContextTrust.SdsMember
  | VirtualGatewayTlsValidationContextTrust.$UnknownMember;
export declare namespace VirtualGatewayTlsValidationContextTrust {
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an
   *          AWS Certicate Manager (ACM) certificate.</p>
   */
  interface AcmMember {
    acm: VirtualGatewayTlsValidationContextAcmTrust;
    file?: never;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   */
  interface FileMember {
    acm?: never;
    file: VirtualGatewayTlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>A reference to an object that represents a virtual gateway's Transport Layer Security (TLS) Secret Discovery
   *          Service validation context trust.</p>
   */
  interface SdsMember {
    acm?: never;
    file?: never;
    sds: VirtualGatewayTlsValidationContextSdsTrust;
    $unknown?: never;
  }
  interface $UnknownMember {
    acm?: never;
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    acm: (value: VirtualGatewayTlsValidationContextAcmTrust) => T;
    file: (value: VirtualGatewayTlsValidationContextFileTrust) => T;
    sds: (value: VirtualGatewayTlsValidationContextSdsTrust) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: VirtualGatewayTlsValidationContextTrust, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayTlsValidationContextTrust) => any;
}
/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context.</p>
 */
export interface VirtualGatewayTlsValidationContext {
  /**
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   */
  trust: VirtualGatewayTlsValidationContextTrust | undefined;
  /**
   * <p>A reference to an object that represents the SANs for a virtual gateway's listener's
   *          Transport Layer Security (TLS) validation context.</p>
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
}
export declare namespace VirtualGatewayTlsValidationContext {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayTlsValidationContext) => any;
}
/**
 * <p>An object that represents a Transport Layer Security (TLS) client policy.</p>
 */
export interface VirtualGatewayClientPolicyTls {
  /**
   * <p>Whether the policy is enforced. The default is <code>True</code>, if a value isn't
   *          specified.</p>
   */
  enforce?: boolean;
  /**
   * <p>One or more ports that the policy is enforced for.</p>
   */
  ports?: number[];
  /**
   * <p>A reference to an object that represents a virtual gateway's client's Transport Layer Security (TLS)
   *          certificate.</p>
   */
  certificate?: VirtualGatewayClientTlsCertificate;
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) validation context.</p>
   */
  validation: VirtualGatewayTlsValidationContext | undefined;
}
export declare namespace VirtualGatewayClientPolicyTls {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayClientPolicyTls) => any;
}
/**
 * <p>An object that represents a client policy.</p>
 */
export interface VirtualGatewayClientPolicy {
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
   */
  tls?: VirtualGatewayClientPolicyTls;
}
export declare namespace VirtualGatewayClientPolicy {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayClientPolicy) => any;
}
/**
 * <p>An object that represents the default properties for a backend.</p>
 */
export interface VirtualGatewayBackendDefaults {
  /**
   * <p>A reference to an object that represents a client policy.</p>
   */
  clientPolicy?: VirtualGatewayClientPolicy;
}
export declare namespace VirtualGatewayBackendDefaults {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayBackendDefaults) => any;
}
/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualGatewayGrpcConnectionPool {
  /**
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   */
  maxRequests: number | undefined;
}
export declare namespace VirtualGatewayGrpcConnectionPool {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayGrpcConnectionPool) => any;
}
/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualGatewayHttpConnectionPool {
  /**
   * <p>Maximum number of outbound TCP connections Envoy can establish concurrently with all
   *          hosts in upstream cluster.</p>
   */
  maxConnections: number | undefined;
  /**
   * <p>Number of overflowing requests after <code>max_connections</code> Envoy will queue to
   *          upstream cluster.</p>
   */
  maxPendingRequests?: number;
}
export declare namespace VirtualGatewayHttpConnectionPool {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayHttpConnectionPool) => any;
}
/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualGatewayHttp2ConnectionPool {
  /**
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   */
  maxRequests: number | undefined;
}
export declare namespace VirtualGatewayHttp2ConnectionPool {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayHttp2ConnectionPool) => any;
}
/**
 * <p>An object that represents the type of virtual gateway connection pool.</p>
 *          <p>Only one protocol is used at a time and should be the same protocol as the one chosen
 *          under port mapping.</p>
 *          <p>If not present the default value for <code>maxPendingRequests</code> is
 *             <code>2147483647</code>.</p>
 */
export declare type VirtualGatewayConnectionPool =
  | VirtualGatewayConnectionPool.GrpcMember
  | VirtualGatewayConnectionPool.HttpMember
  | VirtualGatewayConnectionPool.Http2Member
  | VirtualGatewayConnectionPool.$UnknownMember;
export declare namespace VirtualGatewayConnectionPool {
  /**
   * <p>An object that represents a type of connection pool.</p>
   */
  interface HttpMember {
    http: VirtualGatewayHttpConnectionPool;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents a type of connection pool.</p>
   */
  interface Http2Member {
    http?: never;
    http2: VirtualGatewayHttp2ConnectionPool;
    grpc?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents a type of connection pool. </p>
   */
  interface GrpcMember {
    http?: never;
    http2?: never;
    grpc: VirtualGatewayGrpcConnectionPool;
    $unknown?: never;
  }
  interface $UnknownMember {
    http?: never;
    http2?: never;
    grpc?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    http: (value: VirtualGatewayHttpConnectionPool) => T;
    http2: (value: VirtualGatewayHttp2ConnectionPool) => T;
    grpc: (value: VirtualGatewayGrpcConnectionPool) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: VirtualGatewayConnectionPool, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayConnectionPool) => any;
}
export declare enum VirtualGatewayPortProtocol {
  GRPC = "grpc",
  HTTP = "http",
  HTTP2 = "http2",
}
/**
 * <p>An object that represents the health check policy for a virtual gateway's
 *          listener.</p>
 */
export interface VirtualGatewayHealthCheckPolicy {
  /**
   * <p>The amount of time to wait when receiving a response from the health check, in
   *          milliseconds.</p>
   */
  timeoutMillis: number | undefined;
  /**
   * <p>The time period in milliseconds between each health check execution.</p>
   */
  intervalMillis: number | undefined;
  /**
   * <p>The protocol for the health check request. If you specify <code>grpc</code>, then your
   *          service must conform to the <a href="https://github.com/grpc/grpc/blob/master/doc/health-checking.md">GRPC Health
   *             Checking Protocol</a>.</p>
   */
  protocol: VirtualGatewayPortProtocol | string | undefined;
  /**
   * <p>The destination port for the health check request. This port must match the port defined
   *          in the <a>PortMapping</a> for the listener.</p>
   */
  port?: number;
  /**
   * <p>The destination path for the health check request. This value is only used if the
   *          specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.</p>
   */
  path?: string;
  /**
   * <p>The number of consecutive successful health checks that must occur before declaring the
   *          listener healthy.</p>
   */
  healthyThreshold: number | undefined;
  /**
   * <p>The number of consecutive failed health checks that must occur before declaring a
   *          virtual gateway unhealthy.</p>
   */
  unhealthyThreshold: number | undefined;
}
export declare namespace VirtualGatewayHealthCheckPolicy {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayHealthCheckPolicy) => any;
}
/**
 * <p>An object that represents a port mapping.</p>
 */
export interface VirtualGatewayPortMapping {
  /**
   * <p>The port used for the port mapping. Specify one protocol.</p>
   */
  port: number | undefined;
  /**
   * <p>The protocol used for the port mapping.</p>
   */
  protocol: VirtualGatewayPortProtocol | string | undefined;
}
export declare namespace VirtualGatewayPortMapping {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayPortMapping) => any;
}
/**
 * <p>An object that represents an AWS Certicate Manager (ACM) certificate.</p>
 */
export interface VirtualGatewayListenerTlsAcmCertificate {
  /**
   * <p>The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
   */
  certificateArn: string | undefined;
}
export declare namespace VirtualGatewayListenerTlsAcmCertificate {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayListenerTlsAcmCertificate) => any;
}
/**
 * <p>An object that represents a listener's Transport Layer Security (TLS) certificate.</p>
 */
export declare type VirtualGatewayListenerTlsCertificate =
  | VirtualGatewayListenerTlsCertificate.AcmMember
  | VirtualGatewayListenerTlsCertificate.FileMember
  | VirtualGatewayListenerTlsCertificate.SdsMember
  | VirtualGatewayListenerTlsCertificate.$UnknownMember;
export declare namespace VirtualGatewayListenerTlsCertificate {
  /**
   * <p>A reference to an object that represents an AWS Certicate Manager (ACM) certificate.</p>
   */
  interface AcmMember {
    acm: VirtualGatewayListenerTlsAcmCertificate;
    file?: never;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>A reference to an object that represents a local file certificate.</p>
   */
  interface FileMember {
    acm?: never;
    file: VirtualGatewayListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>A reference to an object that represents a virtual gateway's listener's Secret Discovery
   *          Service certificate.</p>
   */
  interface SdsMember {
    acm?: never;
    file?: never;
    sds: VirtualGatewayListenerTlsSdsCertificate;
    $unknown?: never;
  }
  interface $UnknownMember {
    acm?: never;
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    acm: (value: VirtualGatewayListenerTlsAcmCertificate) => T;
    file: (value: VirtualGatewayListenerTlsFileCertificate) => T;
    sds: (value: VirtualGatewayListenerTlsSdsCertificate) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: VirtualGatewayListenerTlsCertificate, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayListenerTlsCertificate) => any;
}
export declare enum VirtualGatewayListenerTlsMode {
  DISABLED = "DISABLED",
  PERMISSIVE = "PERMISSIVE",
  STRICT = "STRICT",
}
/**
 * <p>An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context
 *          trust.</p>
 */
export declare type VirtualGatewayListenerTlsValidationContextTrust =
  | VirtualGatewayListenerTlsValidationContextTrust.FileMember
  | VirtualGatewayListenerTlsValidationContextTrust.SdsMember
  | VirtualGatewayListenerTlsValidationContextTrust.$UnknownMember;
export declare namespace VirtualGatewayListenerTlsValidationContextTrust {
  /**
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   */
  interface FileMember {
    file: VirtualGatewayTlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret
   *          Discovery Service validation context trust.</p>
   */
  interface SdsMember {
    file?: never;
    sds: VirtualGatewayTlsValidationContextSdsTrust;
    $unknown?: never;
  }
  interface $UnknownMember {
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    file: (value: VirtualGatewayTlsValidationContextFileTrust) => T;
    sds: (value: VirtualGatewayTlsValidationContextSdsTrust) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: VirtualGatewayListenerTlsValidationContextTrust, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayListenerTlsValidationContextTrust) => any;
}
/**
 * <p>An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation
 *          context.</p>
 */
export interface VirtualGatewayListenerTlsValidationContext {
  /**
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   */
  trust: VirtualGatewayListenerTlsValidationContextTrust | undefined;
  /**
   * <p>A reference to an object that represents the SANs for a virtual gateway listener's Transport Layer Security (TLS)
   *          validation context.</p>
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
}
export declare namespace VirtualGatewayListenerTlsValidationContext {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayListenerTlsValidationContext) => any;
}
/**
 * <p>An object that represents the Transport Layer Security (TLS) properties for a listener.</p>
 */
export interface VirtualGatewayListenerTls {
  /**
   * <p>Specify one of the following modes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b/>STRICT – Listener only accepts connections with TLS
   *                enabled. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b/>PERMISSIVE – Listener accepts connections with or
   *                without TLS enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b/>DISABLED – Listener only accepts connections without
   *                TLS. </p>
   *             </li>
   *          </ul>
   */
  mode: VirtualGatewayListenerTlsMode | string | undefined;
  /**
   * <p>A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation
   *          context.</p>
   */
  validation?: VirtualGatewayListenerTlsValidationContext;
  /**
   * <p>An object that represents a Transport Layer Security (TLS) certificate.</p>
   */
  certificate: VirtualGatewayListenerTlsCertificate | undefined;
}
export declare namespace VirtualGatewayListenerTls {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayListenerTls) => any;
}
/**
 * <p>An object that represents a listener for a virtual gateway.</p>
 */
export interface VirtualGatewayListener {
  /**
   * <p>The health check information for the listener.</p>
   */
  healthCheck?: VirtualGatewayHealthCheckPolicy;
  /**
   * <p>The port mapping information for the listener.</p>
   */
  portMapping: VirtualGatewayPortMapping | undefined;
  /**
   * <p>A reference to an object that represents the Transport Layer Security (TLS) properties for the listener.</p>
   */
  tls?: VirtualGatewayListenerTls;
  /**
   * <p>The connection pool information for the virtual gateway listener.</p>
   */
  connectionPool?: VirtualGatewayConnectionPool;
}
export declare namespace VirtualGatewayListener {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayListener) => any;
}
/**
 * <p>An object that represents an access log file.</p>
 */
export interface VirtualGatewayFileAccessLog {
  /**
   * <p>The file path to write access logs to. You can use <code>/dev/stdout</code> to send
   *          access logs to standard out and configure your Envoy container to use a log driver, such as
   *             <code>awslogs</code>, to export the access logs to a log storage service such as Amazon
   *          CloudWatch Logs. You can also specify a path in the Envoy container's file system to write
   *          the files to disk.</p>
   */
  path: string | undefined;
}
export declare namespace VirtualGatewayFileAccessLog {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayFileAccessLog) => any;
}
/**
 * <p>The access log configuration for a virtual gateway.</p>
 */
export declare type VirtualGatewayAccessLog =
  | VirtualGatewayAccessLog.FileMember
  | VirtualGatewayAccessLog.$UnknownMember;
export declare namespace VirtualGatewayAccessLog {
  /**
   * <p>The file object to send virtual gateway access logs to.</p>
   */
  interface FileMember {
    file: VirtualGatewayFileAccessLog;
    $unknown?: never;
  }
  interface $UnknownMember {
    file?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    file: (value: VirtualGatewayFileAccessLog) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: VirtualGatewayAccessLog, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayAccessLog) => any;
}
/**
 * <p>An object that represents logging information.</p>
 */
export interface VirtualGatewayLogging {
  /**
   * <p>The access log configuration.</p>
   */
  accessLog?: VirtualGatewayAccessLog;
}
export declare namespace VirtualGatewayLogging {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayLogging) => any;
}
/**
 * <p>An object that represents the specification of a service mesh resource.</p>
 */
export interface VirtualGatewaySpec {
  /**
   * <p>A reference to an object that represents the defaults for backends.</p>
   */
  backendDefaults?: VirtualGatewayBackendDefaults;
  /**
   * <p>The listeners that the mesh endpoint is expected to receive inbound traffic from. You
   *          can specify one listener.</p>
   */
  listeners: VirtualGatewayListener[] | undefined;
  /**
   * <p>An object that represents logging information.</p>
   */
  logging?: VirtualGatewayLogging;
}
export declare namespace VirtualGatewaySpec {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewaySpec) => any;
}
export interface CreateVirtualGatewayInput {
  /**
   * <p>The name to use for the virtual gateway.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The name of the service mesh to create the virtual gateway in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The virtual gateway specification to apply.</p>
   */
  spec: VirtualGatewaySpec | undefined;
  /**
   * <p>Optional metadata that you can apply to the virtual gateway to assist with
   *          categorization and organization. Each tag consists of a key and an optional value, both of
   *          which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace CreateVirtualGatewayInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateVirtualGatewayInput) => any;
}
export declare enum VirtualGatewayStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}
/**
 * <p>An object that represents the status of the mesh resource.</p>
 */
export interface VirtualGatewayStatus {
  /**
   * <p>The current status.</p>
   */
  status: VirtualGatewayStatusCode | string | undefined;
}
export declare namespace VirtualGatewayStatus {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayStatus) => any;
}
/**
 * <p>An object that represents a virtual gateway returned by a describe operation.</p>
 */
export interface VirtualGatewayData {
  /**
   * <p>The name of the service mesh that the virtual gateway resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual gateway.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The specifications of the virtual gateway.</p>
   */
  spec: VirtualGatewaySpec | undefined;
  /**
   * <p>An object that represents metadata for a resource.</p>
   */
  metadata: ResourceMetadata | undefined;
  /**
   * <p>The current status of the virtual gateway.</p>
   */
  status: VirtualGatewayStatus | undefined;
}
export declare namespace VirtualGatewayData {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayData) => any;
}
export interface CreateVirtualGatewayOutput {
  /**
   * <p>The full description of your virtual gateway following the create call.</p>
   */
  virtualGateway: VirtualGatewayData | undefined;
}
export declare namespace CreateVirtualGatewayOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateVirtualGatewayOutput) => any;
}
export interface DeleteVirtualGatewayInput {
  /**
   * <p>The name of the virtual gateway to delete.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The name of the service mesh to delete the virtual gateway from.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace DeleteVirtualGatewayInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVirtualGatewayInput) => any;
}
export interface DeleteVirtualGatewayOutput {
  /**
   * <p>The virtual gateway that was deleted.</p>
   */
  virtualGateway: VirtualGatewayData | undefined;
}
export declare namespace DeleteVirtualGatewayOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVirtualGatewayOutput) => any;
}
export interface DescribeVirtualGatewayInput {
  /**
   * <p>The name of the virtual gateway to describe.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The name of the service mesh that the gateway route resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace DescribeVirtualGatewayInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeVirtualGatewayInput) => any;
}
export interface DescribeVirtualGatewayOutput {
  /**
   * <p>The full description of your virtual gateway.</p>
   */
  virtualGateway: VirtualGatewayData | undefined;
}
export declare namespace DescribeVirtualGatewayOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeVirtualGatewayOutput) => any;
}
/**
 * <p>An object that represents the virtual service that traffic is routed to.</p>
 */
export interface GatewayRouteVirtualService {
  /**
   * <p>The name of the virtual service that traffic is routed to.</p>
   */
  virtualServiceName: string | undefined;
}
export declare namespace GatewayRouteVirtualService {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GatewayRouteVirtualService) => any;
}
/**
 * <p>An object that represents a gateway route target.</p>
 */
export interface GatewayRouteTarget {
  /**
   * <p>An object that represents a virtual service gateway route target.</p>
   */
  virtualService: GatewayRouteVirtualService | undefined;
}
export declare namespace GatewayRouteTarget {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GatewayRouteTarget) => any;
}
/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface GrpcGatewayRouteAction {
  /**
   * <p>An object that represents the target that traffic is routed to when a request matches the gateway route.</p>
   */
  target: GatewayRouteTarget | undefined;
}
export declare namespace GrpcGatewayRouteAction {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GrpcGatewayRouteAction) => any;
}
/**
 * <p>An object that represents the criteria for determining a request match.</p>
 */
export interface GrpcGatewayRouteMatch {
  /**
   * <p>The fully qualified domain name for the service to match from the request.</p>
   */
  serviceName?: string;
}
export declare namespace GrpcGatewayRouteMatch {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GrpcGatewayRouteMatch) => any;
}
/**
 * <p>An object that represents a gRPC gateway route.</p>
 */
export interface GrpcGatewayRoute {
  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: GrpcGatewayRouteMatch | undefined;
  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: GrpcGatewayRouteAction | undefined;
}
export declare namespace GrpcGatewayRoute {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GrpcGatewayRoute) => any;
}
/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface HttpGatewayRouteAction {
  /**
   * <p>An object that represents the target that traffic is routed to when a request matches the gateway route.</p>
   */
  target: GatewayRouteTarget | undefined;
}
export declare namespace HttpGatewayRouteAction {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HttpGatewayRouteAction) => any;
}
/**
 * <p>An object that represents the criteria for determining a request match.</p>
 */
export interface HttpGatewayRouteMatch {
  /**
   * <p>Specifies the path to match requests with. This parameter must always start with
   *             <code>/</code>, which by itself matches all requests to the virtual service name. You
   *          can also match for path-based routing of requests. For example, if your virtual service
   *          name is <code>my-service.local</code> and you want the route to match requests to
   *             <code>my-service.local/metrics</code>, your prefix should be
   *          <code>/metrics</code>.</p>
   */
  prefix: string | undefined;
}
export declare namespace HttpGatewayRouteMatch {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HttpGatewayRouteMatch) => any;
}
/**
 * <p>An object that represents an HTTP gateway route.</p>
 */
export interface HttpGatewayRoute {
  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: HttpGatewayRouteMatch | undefined;
  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: HttpGatewayRouteAction | undefined;
}
export declare namespace HttpGatewayRoute {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HttpGatewayRoute) => any;
}
/**
 * <p>An object that represents a gateway route specification. Specify one gateway route
 *          type.</p>
 */
export interface GatewayRouteSpec {
  /**
   * <p>An object that represents the specification of an HTTP gateway route.</p>
   */
  httpRoute?: HttpGatewayRoute;
  /**
   * <p>An object that represents the specification of an HTTP/2 gateway route.</p>
   */
  http2Route?: HttpGatewayRoute;
  /**
   * <p>An object that represents the specification of a gRPC gateway route.</p>
   */
  grpcRoute?: GrpcGatewayRoute;
}
export declare namespace GatewayRouteSpec {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GatewayRouteSpec) => any;
}
export interface CreateGatewayRouteInput {
  /**
   * <p>The name to use for the gateway route.</p>
   */
  gatewayRouteName: string | undefined;
  /**
   * <p>The name of the service mesh to create the gateway route in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual gateway to associate the gateway route with. If the virtual
   *          gateway is in a shared mesh, then you must be the owner of the virtual gateway
   *          resource.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The gateway route specification to apply.</p>
   */
  spec: GatewayRouteSpec | undefined;
  /**
   * <p>Optional metadata that you can apply to the gateway route to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace CreateGatewayRouteInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateGatewayRouteInput) => any;
}
export declare enum GatewayRouteStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}
/**
 * <p>An object that represents the current status of a gateway route.</p>
 */
export interface GatewayRouteStatus {
  /**
   * <p>The current status for the gateway route.</p>
   */
  status: GatewayRouteStatusCode | string | undefined;
}
export declare namespace GatewayRouteStatus {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GatewayRouteStatus) => any;
}
/**
 * <p>An object that represents a gateway route returned by a describe operation.</p>
 */
export interface GatewayRouteData {
  /**
   * <p>The name of the service mesh that the resource resides in. </p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the gateway route.</p>
   */
  gatewayRouteName: string | undefined;
  /**
   * <p>The virtual gateway that the gateway route is associated with.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The specifications of the gateway route.</p>
   */
  spec: GatewayRouteSpec | undefined;
  /**
   * <p>An object that represents metadata for a resource.</p>
   */
  metadata: ResourceMetadata | undefined;
  /**
   * <p>The status of the gateway route.</p>
   */
  status: GatewayRouteStatus | undefined;
}
export declare namespace GatewayRouteData {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GatewayRouteData) => any;
}
export interface CreateGatewayRouteOutput {
  /**
   * <p>The full description of your gateway route following the create call.</p>
   */
  gatewayRoute: GatewayRouteData | undefined;
}
export declare namespace CreateGatewayRouteOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateGatewayRouteOutput) => any;
}
export interface DeleteGatewayRouteInput {
  /**
   * <p>The name of the gateway route to delete.</p>
   */
  gatewayRouteName: string | undefined;
  /**
   * <p>The name of the service mesh to delete the gateway route from.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual gateway to delete the route from.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace DeleteGatewayRouteInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteGatewayRouteInput) => any;
}
export interface DeleteGatewayRouteOutput {
  /**
   * <p>The gateway route that was deleted.</p>
   */
  gatewayRoute: GatewayRouteData | undefined;
}
export declare namespace DeleteGatewayRouteOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteGatewayRouteOutput) => any;
}
export interface DescribeGatewayRouteInput {
  /**
   * <p>The name of the gateway route to describe.</p>
   */
  gatewayRouteName: string | undefined;
  /**
   * <p>The name of the service mesh that the gateway route resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual gateway that the gateway route is associated with.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace DescribeGatewayRouteInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeGatewayRouteInput) => any;
}
export interface DescribeGatewayRouteOutput {
  /**
   * <p>The full description of your gateway route.</p>
   */
  gatewayRoute: GatewayRouteData | undefined;
}
export declare namespace DescribeGatewayRouteOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeGatewayRouteOutput) => any;
}
export interface ListGatewayRoutesInput {
  /**
   * <p>The name of the service mesh to list gateway routes in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual gateway to list gateway routes in.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListGatewayRoutes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results returned by <code>ListGatewayRoutes</code> in paginated
   *          output. When you use this parameter, <code>ListGatewayRoutes</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListGatewayRoutes</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListGatewayRoutes</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace ListGatewayRoutesInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListGatewayRoutesInput) => any;
}
/**
 * <p>An object that represents a gateway route returned by a list operation.</p>
 */
export interface GatewayRouteRef {
  /**
   * <p>The name of the service mesh that the resource resides in. </p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the gateway route.</p>
   */
  gatewayRouteName: string | undefined;
  /**
   * <p>The virtual gateway that the gateway route is associated with.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;
  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;
  /**
   * <p>The full Amazon Resource Name (ARN) for the gateway route.</p>
   */
  arn: string | undefined;
  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}
export declare namespace GatewayRouteRef {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GatewayRouteRef) => any;
}
export interface ListGatewayRoutesOutput {
  /**
   * <p>The list of existing gateway routes for the specified service mesh and virtual
   *          gateway.</p>
   */
  gatewayRoutes: GatewayRouteRef[] | undefined;
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListGatewayRoutes</code>
   *          request. When the results of a <code>ListGatewayRoutes</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}
export declare namespace ListGatewayRoutesOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListGatewayRoutesOutput) => any;
}
export interface UpdateGatewayRouteInput {
  /**
   * <p>The name of the gateway route to update.</p>
   */
  gatewayRouteName: string | undefined;
  /**
   * <p>The name of the service mesh that the gateway route resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual gateway that the gateway route is associated with.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The new gateway route specification to apply. This overwrites the existing data.</p>
   */
  spec: GatewayRouteSpec | undefined;
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace UpdateGatewayRouteInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateGatewayRouteInput) => any;
}
export interface UpdateGatewayRouteOutput {
  /**
   * <p>A full description of the gateway route that was updated.</p>
   */
  gatewayRoute: GatewayRouteData | undefined;
}
export declare namespace UpdateGatewayRouteOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateGatewayRouteOutput) => any;
}
export interface ListVirtualGatewaysInput {
  /**
   * <p>The name of the service mesh to list virtual gateways in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualGateways</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results returned by <code>ListVirtualGateways</code> in paginated
   *          output. When you use this parameter, <code>ListVirtualGateways</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListVirtualGateways</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListVirtualGateways</code> returns up to 100 results and
   *          a <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace ListVirtualGatewaysInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVirtualGatewaysInput) => any;
}
/**
 * <p>An object that represents a virtual gateway returned by a list operation.</p>
 */
export interface VirtualGatewayRef {
  /**
   * <p>The name of the service mesh that the resource resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the resource.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;
  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;
  /**
   * <p>The full Amazon Resource Name (ARN) for the resource.</p>
   */
  arn: string | undefined;
  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}
export declare namespace VirtualGatewayRef {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualGatewayRef) => any;
}
export interface ListVirtualGatewaysOutput {
  /**
   * <p>The list of existing virtual gateways for the specified service mesh.</p>
   */
  virtualGateways: VirtualGatewayRef[] | undefined;
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualGateways</code>
   *          request. When the results of a <code>ListVirtualGateways</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}
export declare namespace ListVirtualGatewaysOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVirtualGatewaysOutput) => any;
}
export interface UpdateVirtualGatewayInput {
  /**
   * <p>The name of the virtual gateway to update.</p>
   */
  virtualGatewayName: string | undefined;
  /**
   * <p>The name of the service mesh that the virtual gateway resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The new virtual gateway specification to apply. This overwrites the existing
   *          data.</p>
   */
  spec: VirtualGatewaySpec | undefined;
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace UpdateVirtualGatewayInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateVirtualGatewayInput) => any;
}
export interface UpdateVirtualGatewayOutput {
  /**
   * <p>A full description of the virtual gateway that was updated.</p>
   */
  virtualGateway: VirtualGatewayData | undefined;
}
export declare namespace UpdateVirtualGatewayOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateVirtualGatewayOutput) => any;
}
/**
 * <p>An object that represents a local file certificate.
 *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
 */
export interface ListenerTlsFileCertificate {
  /**
   * <p>The certificate chain for the certificate.</p>
   */
  certificateChain: string | undefined;
  /**
   * <p>The private key for a certificate stored on the file system of the virtual node that the
   *          proxy is running on.</p>
   */
  privateKey: string | undefined;
}
export declare namespace ListenerTlsFileCertificate {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListenerTlsFileCertificate) => any;
}
/**
 * <p>An object that represents the listener's Secret Discovery Service certificate. The proxy
 *          must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info.</p>
 */
export interface ListenerTlsSdsCertificate {
  /**
   * <p>A reference to an object that represents the name of the secret requested from the
   *          Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or
   *          certificate chain.</p>
   */
  secretName: string | undefined;
}
export declare namespace ListenerTlsSdsCertificate {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListenerTlsSdsCertificate) => any;
}
/**
 * <p>An object that represents the client's certificate.</p>
 */
export declare type ClientTlsCertificate =
  | ClientTlsCertificate.FileMember
  | ClientTlsCertificate.SdsMember
  | ClientTlsCertificate.$UnknownMember;
export declare namespace ClientTlsCertificate {
  /**
   * <p>An object that represents a local file certificate.
   *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
   */
  interface FileMember {
    file: ListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>A reference to an object that represents a client's TLS Secret Discovery Service
   *          certificate.</p>
   */
  interface SdsMember {
    file?: never;
    sds: ListenerTlsSdsCertificate;
    $unknown?: never;
  }
  interface $UnknownMember {
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    file: (value: ListenerTlsFileCertificate) => T;
    sds: (value: ListenerTlsSdsCertificate) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: ClientTlsCertificate, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ClientTlsCertificate) => any;
}
/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certicate Manager (ACM)
 *          certificate.</p>
 */
export interface TlsValidationContextAcmTrust {
  /**
   * <p>One or more ACM Amazon Resource Name (ARN)s.</p>
   */
  certificateAuthorityArns: string[] | undefined;
}
export declare namespace TlsValidationContextAcmTrust {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TlsValidationContextAcmTrust) => any;
}
/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
 */
export interface TlsValidationContextFileTrust {
  /**
   * <p>The certificate trust chain for a certificate stored on the file system of the virtual
   *          node that the proxy is running on.</p>
   */
  certificateChain: string | undefined;
}
export declare namespace TlsValidationContextFileTrust {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TlsValidationContextFileTrust) => any;
}
/**
 * <p>An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust. The
 *          proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh
 *             <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS
 *             documentation</a> for more info.</p>
 */
export interface TlsValidationContextSdsTrust {
  /**
   * <p>A reference to an object that represents the name of the secret for a Transport Layer Security (TLS) Secret
   *          Discovery Service validation context trust.</p>
   */
  secretName: string | undefined;
}
export declare namespace TlsValidationContextSdsTrust {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TlsValidationContextSdsTrust) => any;
}
/**
 * <p>An object that represents a Transport Layer Security (TLS) validation context trust.</p>
 */
export declare type TlsValidationContextTrust =
  | TlsValidationContextTrust.AcmMember
  | TlsValidationContextTrust.FileMember
  | TlsValidationContextTrust.SdsMember
  | TlsValidationContextTrust.$UnknownMember;
export declare namespace TlsValidationContextTrust {
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an
   *          AWS Certicate Manager (ACM) certificate.</p>
   */
  interface AcmMember {
    acm: TlsValidationContextAcmTrust;
    file?: never;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   */
  interface FileMember {
    acm?: never;
    file: TlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) Secret Discovery Service validation
   *          context trust.</p>
   */
  interface SdsMember {
    acm?: never;
    file?: never;
    sds: TlsValidationContextSdsTrust;
    $unknown?: never;
  }
  interface $UnknownMember {
    acm?: never;
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    acm: (value: TlsValidationContextAcmTrust) => T;
    file: (value: TlsValidationContextFileTrust) => T;
    sds: (value: TlsValidationContextSdsTrust) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: TlsValidationContextTrust, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TlsValidationContextTrust) => any;
}
/**
 * <p>An object that represents how the proxy will validate its peer during Transport Layer Security (TLS)
 *          negotiation.</p>
 */
export interface TlsValidationContext {
  /**
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   */
  trust: TlsValidationContextTrust | undefined;
  /**
   * <p>A reference to an object that represents the SANs for a Transport Layer Security (TLS) validation context.</p>
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
}
export declare namespace TlsValidationContext {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TlsValidationContext) => any;
}
/**
 * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
 */
export interface ClientPolicyTls {
  /**
   * <p>Whether the policy is enforced. The default is <code>True</code>, if a value isn't specified.</p>
   */
  enforce?: boolean;
  /**
   * <p>One or more ports that the policy is enforced for.</p>
   */
  ports?: number[];
  /**
   * <p>A reference to an object that represents a client's TLS certificate.</p>
   */
  certificate?: ClientTlsCertificate;
  /**
   * <p>A reference to an object that represents a TLS validation context.</p>
   */
  validation: TlsValidationContext | undefined;
}
export declare namespace ClientPolicyTls {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ClientPolicyTls) => any;
}
/**
 * <p>An object that represents a client policy.</p>
 */
export interface ClientPolicy {
  /**
   * <p>A reference to an object that represents a Transport Layer Security (TLS) client policy.</p>
   */
  tls?: ClientPolicyTls;
}
export declare namespace ClientPolicy {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ClientPolicy) => any;
}
/**
 * <p>An object that represents the default properties for a backend.</p>
 */
export interface BackendDefaults {
  /**
   * <p>A reference to an object that represents a client policy.</p>
   */
  clientPolicy?: ClientPolicy;
}
export declare namespace BackendDefaults {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BackendDefaults) => any;
}
/**
 * <p>An object that represents a virtual service backend for a virtual node.</p>
 */
export interface VirtualServiceBackend {
  /**
   * <p>The name of the virtual service that is acting as a virtual node backend.</p>
   */
  virtualServiceName: string | undefined;
  /**
   * <p>A reference to an object that represents the client policy for a backend.</p>
   */
  clientPolicy?: ClientPolicy;
}
export declare namespace VirtualServiceBackend {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualServiceBackend) => any;
}
/**
 * <p>An object that represents the backends that a virtual node is expected to send outbound
 *          traffic to.</p>
 */
export declare type Backend = Backend.VirtualServiceMember | Backend.$UnknownMember;
export declare namespace Backend {
  /**
   * <p>Specifies a virtual service to use as a backend.  </p>
   */
  interface VirtualServiceMember {
    virtualService: VirtualServiceBackend;
    $unknown?: never;
  }
  interface $UnknownMember {
    virtualService?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    virtualService: (value: VirtualServiceBackend) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: Backend, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Backend) => any;
}
/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualNodeGrpcConnectionPool {
  /**
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   */
  maxRequests: number | undefined;
}
export declare namespace VirtualNodeGrpcConnectionPool {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualNodeGrpcConnectionPool) => any;
}
/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualNodeHttpConnectionPool {
  /**
   * <p>Maximum number of outbound TCP connections Envoy can establish concurrently with all
   *          hosts in upstream cluster.</p>
   */
  maxConnections: number | undefined;
  /**
   * <p>Number of overflowing requests after <code>max_connections</code> Envoy will queue to
   *          upstream cluster.</p>
   */
  maxPendingRequests?: number;
}
export declare namespace VirtualNodeHttpConnectionPool {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualNodeHttpConnectionPool) => any;
}
/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualNodeHttp2ConnectionPool {
  /**
   * <p>Maximum number of inflight requests Envoy can concurrently support across hosts in
   *          upstream cluster.</p>
   */
  maxRequests: number | undefined;
}
export declare namespace VirtualNodeHttp2ConnectionPool {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualNodeHttp2ConnectionPool) => any;
}
/**
 * <p>An object that represents a type of connection pool.</p>
 */
export interface VirtualNodeTcpConnectionPool {
  /**
   * <p>Maximum number of outbound TCP connections Envoy can establish concurrently with all
   *          hosts in upstream cluster.</p>
   */
  maxConnections: number | undefined;
}
export declare namespace VirtualNodeTcpConnectionPool {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualNodeTcpConnectionPool) => any;
}
/**
 * <p>An object that represents the type of virtual node connection pool.</p>
 *          <p>Only one protocol is used at a time and should be the same protocol as the one chosen
 *          under port mapping.</p>
 *          <p>If not present the default value for <code>maxPendingRequests</code> is
 *             <code>2147483647</code>.</p>
 *          <p/>
 */
export declare type VirtualNodeConnectionPool =
  | VirtualNodeConnectionPool.GrpcMember
  | VirtualNodeConnectionPool.HttpMember
  | VirtualNodeConnectionPool.Http2Member
  | VirtualNodeConnectionPool.TcpMember
  | VirtualNodeConnectionPool.$UnknownMember;
export declare namespace VirtualNodeConnectionPool {
  /**
   * <p>An object that represents a type of connection pool.</p>
   */
  interface TcpMember {
    tcp: VirtualNodeTcpConnectionPool;
    http?: never;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents a type of connection pool.</p>
   */
  interface HttpMember {
    tcp?: never;
    http: VirtualNodeHttpConnectionPool;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents a type of connection pool.</p>
   */
  interface Http2Member {
    tcp?: never;
    http?: never;
    http2: VirtualNodeHttp2ConnectionPool;
    grpc?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents a type of connection pool.</p>
   */
  interface GrpcMember {
    tcp?: never;
    http?: never;
    http2?: never;
    grpc: VirtualNodeGrpcConnectionPool;
    $unknown?: never;
  }
  interface $UnknownMember {
    tcp?: never;
    http?: never;
    http2?: never;
    grpc?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    tcp: (value: VirtualNodeTcpConnectionPool) => T;
    http: (value: VirtualNodeHttpConnectionPool) => T;
    http2: (value: VirtualNodeHttp2ConnectionPool) => T;
    grpc: (value: VirtualNodeGrpcConnectionPool) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: VirtualNodeConnectionPool, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualNodeConnectionPool) => any;
}
export declare enum PortProtocol {
  GRPC = "grpc",
  HTTP = "http",
  HTTP2 = "http2",
  TCP = "tcp",
}
/**
 * <p>An object that represents the health check policy for a virtual node's listener.</p>
 */
export interface HealthCheckPolicy {
  /**
   * <p>The amount of time to wait when receiving a response from the health check, in
   *          milliseconds.</p>
   */
  timeoutMillis: number | undefined;
  /**
   * <p>The time period in milliseconds between each health check execution.</p>
   */
  intervalMillis: number | undefined;
  /**
   * <p>The protocol for the health check request. If you specify <code>grpc</code>, then your
   *          service must conform to the <a href="https://github.com/grpc/grpc/blob/master/doc/health-checking.md">GRPC Health
   *             Checking Protocol</a>.</p>
   */
  protocol: PortProtocol | string | undefined;
  /**
   * <p>The destination port for the health check request. This port must match the port defined
   *          in the <a>PortMapping</a> for the listener.</p>
   */
  port?: number;
  /**
   * <p>The destination path for the health check request. This value is only used if the
   *          specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.</p>
   */
  path?: string;
  /**
   * <p>The number of consecutive successful health checks that must occur before declaring
   *          listener healthy.</p>
   */
  healthyThreshold: number | undefined;
  /**
   * <p>The number of consecutive failed health checks that must occur before declaring a
   *          virtual node unhealthy. </p>
   */
  unhealthyThreshold: number | undefined;
}
export declare namespace HealthCheckPolicy {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HealthCheckPolicy) => any;
}
export declare enum DurationUnit {
  MS = "ms",
  S = "s",
}
/**
 * <p>An object that represents a duration of time.</p>
 */
export interface Duration {
  /**
   * <p>A number of time units.</p>
   */
  value?: number;
  /**
   * <p>A unit of time.</p>
   */
  unit?: DurationUnit | string;
}
export declare namespace Duration {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Duration) => any;
}
/**
 * <p>An object that represents the outlier detection for a virtual node's listener.</p>
 */
export interface OutlierDetection {
  /**
   * <p>Number of consecutive <code>5xx</code> errors required for ejection. </p>
   */
  maxServerErrors: number | undefined;
  /**
   * <p>The time interval between ejection sweep analysis.</p>
   */
  interval: Duration | undefined;
  /**
   * <p>The base amount of time for which a host is ejected.</p>
   */
  baseEjectionDuration: Duration | undefined;
  /**
   * <p>Maximum percentage of hosts in load balancing pool for upstream service that can be
   *          ejected. Will eject at least one host regardless of the value.</p>
   */
  maxEjectionPercent: number | undefined;
}
export declare namespace OutlierDetection {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: OutlierDetection) => any;
}
/**
 * <p>An object that represents a port mapping.</p>
 */
export interface PortMapping {
  /**
   * <p>The port used for the port mapping.</p>
   */
  port: number | undefined;
  /**
   * <p>The protocol used for the port mapping. Specify one protocol.</p>
   */
  protocol: PortProtocol | string | undefined;
}
export declare namespace PortMapping {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PortMapping) => any;
}
/**
 * <p>An object that represents types of timeouts. </p>
 */
export interface GrpcTimeout {
  /**
   * <p>An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh
   *                                   resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15
   *                                   seconds for the source and destination virtual node and the route.</p>
   */
  perRequest?: Duration;
  /**
   * <p>An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.</p>
   */
  idle?: Duration;
}
export declare namespace GrpcTimeout {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GrpcTimeout) => any;
}
/**
 * <p>An object that represents types of timeouts. </p>
 */
export interface HttpTimeout {
  /**
   * <p>An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh
   *                                   resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15
   *                                   seconds for the source and destination virtual node and the route.</p>
   */
  perRequest?: Duration;
  /**
   * <p>An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.</p>
   */
  idle?: Duration;
}
export declare namespace HttpTimeout {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HttpTimeout) => any;
}
/**
 * <p>An object that represents types of timeouts. </p>
 */
export interface TcpTimeout {
  /**
   * <p>An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.</p>
   */
  idle?: Duration;
}
export declare namespace TcpTimeout {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TcpTimeout) => any;
}
/**
 * <p>An object that represents timeouts for different protocols.</p>
 */
export declare type ListenerTimeout =
  | ListenerTimeout.GrpcMember
  | ListenerTimeout.HttpMember
  | ListenerTimeout.Http2Member
  | ListenerTimeout.TcpMember
  | ListenerTimeout.$UnknownMember;
export declare namespace ListenerTimeout {
  /**
   * <p>An object that represents types of timeouts. </p>
   */
  interface TcpMember {
    tcp: TcpTimeout;
    http?: never;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents types of timeouts. </p>
   */
  interface HttpMember {
    tcp?: never;
    http: HttpTimeout;
    http2?: never;
    grpc?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents types of timeouts. </p>
   */
  interface Http2Member {
    tcp?: never;
    http?: never;
    http2: HttpTimeout;
    grpc?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents types of timeouts. </p>
   */
  interface GrpcMember {
    tcp?: never;
    http?: never;
    http2?: never;
    grpc: GrpcTimeout;
    $unknown?: never;
  }
  interface $UnknownMember {
    tcp?: never;
    http?: never;
    http2?: never;
    grpc?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    tcp: (value: TcpTimeout) => T;
    http: (value: HttpTimeout) => T;
    http2: (value: HttpTimeout) => T;
    grpc: (value: GrpcTimeout) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: ListenerTimeout, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListenerTimeout) => any;
}
/**
 * <p>An object that represents an AWS Certicate Manager (ACM) certificate.</p>
 */
export interface ListenerTlsAcmCertificate {
  /**
   * <p>The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.</p>
   */
  certificateArn: string | undefined;
}
export declare namespace ListenerTlsAcmCertificate {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListenerTlsAcmCertificate) => any;
}
/**
 * <p>An object that represents a listener's Transport Layer Security (TLS) certificate.</p>
 */
export declare type ListenerTlsCertificate =
  | ListenerTlsCertificate.AcmMember
  | ListenerTlsCertificate.FileMember
  | ListenerTlsCertificate.SdsMember
  | ListenerTlsCertificate.$UnknownMember;
export declare namespace ListenerTlsCertificate {
  /**
   * <p>A reference to an object that represents an AWS Certicate Manager (ACM) certificate.</p>
   */
  interface AcmMember {
    acm: ListenerTlsAcmCertificate;
    file?: never;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>A reference to an object that represents a local file certificate.</p>
   */
  interface FileMember {
    acm?: never;
    file: ListenerTlsFileCertificate;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>A reference to an object that represents a listener's Secret Discovery Service
   *          certificate.</p>
   */
  interface SdsMember {
    acm?: never;
    file?: never;
    sds: ListenerTlsSdsCertificate;
    $unknown?: never;
  }
  interface $UnknownMember {
    acm?: never;
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    acm: (value: ListenerTlsAcmCertificate) => T;
    file: (value: ListenerTlsFileCertificate) => T;
    sds: (value: ListenerTlsSdsCertificate) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: ListenerTlsCertificate, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListenerTlsCertificate) => any;
}
export declare enum ListenerTlsMode {
  DISABLED = "DISABLED",
  PERMISSIVE = "PERMISSIVE",
  STRICT = "STRICT",
}
/**
 * <p>An object that represents a listener's Transport Layer Security (TLS) validation context trust.</p>
 */
export declare type ListenerTlsValidationContextTrust =
  | ListenerTlsValidationContextTrust.FileMember
  | ListenerTlsValidationContextTrust.SdsMember
  | ListenerTlsValidationContextTrust.$UnknownMember;
export declare namespace ListenerTlsValidationContextTrust {
  /**
   * <p>An object that represents a Transport Layer Security (TLS) validation context trust for a local file.</p>
   */
  interface FileMember {
    file: TlsValidationContextFileTrust;
    sds?: never;
    $unknown?: never;
  }
  /**
   * <p>A reference to an object that represents a listener's Transport Layer Security (TLS) Secret Discovery Service
   *          validation context trust.</p>
   */
  interface SdsMember {
    file?: never;
    sds: TlsValidationContextSdsTrust;
    $unknown?: never;
  }
  interface $UnknownMember {
    file?: never;
    sds?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    file: (value: TlsValidationContextFileTrust) => T;
    sds: (value: TlsValidationContextSdsTrust) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: ListenerTlsValidationContextTrust, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListenerTlsValidationContextTrust) => any;
}
/**
 * <p>An object that represents a listener's Transport Layer Security (TLS) validation context.</p>
 */
export interface ListenerTlsValidationContext {
  /**
   * <p>A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS)
   *          certificate.</p>
   */
  trust: ListenerTlsValidationContextTrust | undefined;
  /**
   * <p>A reference to an object that represents the SANs for a listener's Transport Layer Security (TLS) validation
   *          context.</p>
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
}
export declare namespace ListenerTlsValidationContext {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListenerTlsValidationContext) => any;
}
/**
 * <p>An object that represents the Transport Layer Security (TLS) properties for a listener.</p>
 */
export interface ListenerTls {
  /**
   * <p>Specify one of the following modes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b/>STRICT – Listener only accepts connections with TLS
   *                enabled. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b/>PERMISSIVE – Listener accepts connections with or
   *                without TLS enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b/>DISABLED – Listener only accepts connections without
   *                TLS. </p>
   *             </li>
   *          </ul>
   */
  mode: ListenerTlsMode | string | undefined;
  /**
   * <p>A reference to an object that represents a listener's Transport Layer Security (TLS) certificate.</p>
   */
  certificate: ListenerTlsCertificate | undefined;
  /**
   * <p>A reference to an object that represents a listener's Transport Layer Security (TLS) validation context.</p>
   */
  validation?: ListenerTlsValidationContext;
}
export declare namespace ListenerTls {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListenerTls) => any;
}
/**
 * <p>An object that represents a listener for a virtual node.</p>
 */
export interface Listener {
  /**
   * <p>The port mapping information for the listener.</p>
   */
  portMapping: PortMapping | undefined;
  /**
   * <p>A reference to an object that represents the Transport Layer Security (TLS) properties for a listener.</p>
   */
  tls?: ListenerTls;
  /**
   * <p>The health check information for the listener.</p>
   */
  healthCheck?: HealthCheckPolicy;
  /**
   * <p>An object that represents timeouts for different protocols.</p>
   */
  timeout?: ListenerTimeout;
  /**
   * <p>The outlier detection information for the listener.</p>
   */
  outlierDetection?: OutlierDetection;
  /**
   * <p>The connection pool information for the listener.</p>
   */
  connectionPool?: VirtualNodeConnectionPool;
}
export declare namespace Listener {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Listener) => any;
}
/**
 * <p>An object that represents the logging information for a virtual node.</p>
 */
export interface Logging {
  /**
   * <p>The access log configuration for a virtual node.</p>
   */
  accessLog?: AccessLog;
}
export declare namespace Logging {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Logging) => any;
}
/**
 * <p>An object that represents the AWS Cloud Map attribute information for your virtual
 *          node.</p>
 *          <note>
 *             <p>AWS Cloud Map is not available in the eu-south-1 Region.</p>
 *          </note>
 */
export interface AwsCloudMapInstanceAttribute {
  /**
   * <p>The name of an AWS Cloud Map service instance attribute key. Any AWS Cloud Map service
   *          instance that contains the specified key and value is returned.</p>
   */
  key: string | undefined;
  /**
   * <p>The value of an AWS Cloud Map service instance attribute key. Any AWS Cloud Map service
   *          instance that contains the specified key and value is returned.</p>
   */
  value: string | undefined;
}
export declare namespace AwsCloudMapInstanceAttribute {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AwsCloudMapInstanceAttribute) => any;
}
/**
 * <p>An object that represents the AWS Cloud Map service discovery information for your virtual
 *          node.</p>
 *          <note>
 *             <p>AWS Cloud Map is not available in the eu-south-1 Region.</p>
 *          </note>
 */
export interface AwsCloudMapServiceDiscovery {
  /**
   * <p>The name of the AWS Cloud Map namespace to use.</p>
   */
  namespaceName: string | undefined;
  /**
   * <p>The name of the AWS Cloud Map service to use.</p>
   */
  serviceName: string | undefined;
  /**
   * <p>A string map that contains attributes with values that you can use to filter instances
   *          by any custom attribute that you specified when you registered the instance. Only instances
   *          that match all of the specified key/value pairs will be returned.</p>
   */
  attributes?: AwsCloudMapInstanceAttribute[];
}
export declare namespace AwsCloudMapServiceDiscovery {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AwsCloudMapServiceDiscovery) => any;
}
/**
 * <p>An object that represents the DNS service discovery information for your virtual
 *          node.</p>
 */
export interface DnsServiceDiscovery {
  /**
   * <p>Specifies the DNS service discovery hostname for the virtual node. </p>
   */
  hostname: string | undefined;
}
export declare namespace DnsServiceDiscovery {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DnsServiceDiscovery) => any;
}
/**
 * <p>An object that represents the service discovery information for a virtual node.</p>
 */
export declare type ServiceDiscovery =
  | ServiceDiscovery.AwsCloudMapMember
  | ServiceDiscovery.DnsMember
  | ServiceDiscovery.$UnknownMember;
export declare namespace ServiceDiscovery {
  /**
   * <p>Specifies the DNS information for the virtual node.</p>
   */
  interface DnsMember {
    dns: DnsServiceDiscovery;
    awsCloudMap?: never;
    $unknown?: never;
  }
  /**
   * <p>Specifies any AWS Cloud Map information for the virtual node.</p>
   */
  interface AwsCloudMapMember {
    dns?: never;
    awsCloudMap: AwsCloudMapServiceDiscovery;
    $unknown?: never;
  }
  interface $UnknownMember {
    dns?: never;
    awsCloudMap?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    dns: (value: DnsServiceDiscovery) => T;
    awsCloudMap: (value: AwsCloudMapServiceDiscovery) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: ServiceDiscovery, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ServiceDiscovery) => any;
}
/**
 * <p>An object that represents the specification of a virtual node.</p>
 */
export interface VirtualNodeSpec {
  /**
   * <p>The service discovery information for the virtual node. If your virtual node does not
   *          expect ingress traffic, you can omit this parameter. If you specify a
   *          <code>listener</code>, then you must specify service discovery information.</p>
   */
  serviceDiscovery?: ServiceDiscovery;
  /**
   * <p>The listener that the virtual node is expected to receive inbound traffic from. You can
   *          specify one listener.</p>
   */
  listeners?: Listener[];
  /**
   * <p>The backends that the virtual node is expected to send outbound traffic to.</p>
   */
  backends?: Backend[];
  /**
   * <p>A reference to an object that represents the defaults for backends.</p>
   */
  backendDefaults?: BackendDefaults;
  /**
   * <p>The inbound and outbound access logging information for the virtual node.</p>
   */
  logging?: Logging;
}
export declare namespace VirtualNodeSpec {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualNodeSpec) => any;
}
/**
 *
 */
export interface CreateVirtualNodeInput {
  /**
   * <p>The name to use for the virtual node.</p>
   */
  virtualNodeName: string | undefined;
  /**
   * <p>The name of the service mesh to create the virtual node in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The virtual node specification to apply.</p>
   */
  spec: VirtualNodeSpec | undefined;
  /**
   * <p>Optional metadata that you can apply to the virtual node to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace CreateVirtualNodeInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateVirtualNodeInput) => any;
}
export declare enum VirtualNodeStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}
/**
 * <p>An object that represents the current status of the virtual node.</p>
 */
export interface VirtualNodeStatus {
  /**
   * <p>The current status of the virtual node.</p>
   */
  status: VirtualNodeStatusCode | string | undefined;
}
export declare namespace VirtualNodeStatus {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualNodeStatus) => any;
}
/**
 * <p>An object that represents a virtual node returned by a describe operation.</p>
 */
export interface VirtualNodeData {
  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual node.</p>
   */
  virtualNodeName: string | undefined;
  /**
   * <p>The specifications of the virtual node.</p>
   */
  spec: VirtualNodeSpec | undefined;
  /**
   * <p>The associated metadata for the virtual node.</p>
   */
  metadata: ResourceMetadata | undefined;
  /**
   * <p>The current status for the virtual node.</p>
   */
  status: VirtualNodeStatus | undefined;
}
export declare namespace VirtualNodeData {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualNodeData) => any;
}
/**
 *
 */
export interface CreateVirtualNodeOutput {
  /**
   * <p>The full description of your virtual node following the create call.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}
export declare namespace CreateVirtualNodeOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateVirtualNodeOutput) => any;
}
/**
 *
 */
export interface DeleteVirtualNodeInput {
  /**
   * <p>The name of the virtual node to delete.</p>
   */
  virtualNodeName: string | undefined;
  /**
   * <p>The name of the service mesh to delete the virtual node in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace DeleteVirtualNodeInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVirtualNodeInput) => any;
}
/**
 *
 */
export interface DeleteVirtualNodeOutput {
  /**
   * <p>The virtual node that was deleted.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}
export declare namespace DeleteVirtualNodeOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVirtualNodeOutput) => any;
}
/**
 *
 */
export interface DescribeVirtualNodeInput {
  /**
   * <p>The name of the virtual node to describe.</p>
   */
  virtualNodeName: string | undefined;
  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace DescribeVirtualNodeInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeVirtualNodeInput) => any;
}
/**
 *
 */
export interface DescribeVirtualNodeOutput {
  /**
   * <p>The full description of your virtual node.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}
export declare namespace DescribeVirtualNodeOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeVirtualNodeOutput) => any;
}
/**
 *
 */
export interface ListVirtualNodesInput {
  /**
   * <p>The name of the service mesh to list virtual nodes in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualNodes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results returned by <code>ListVirtualNodes</code> in paginated
   *          output. When you use this parameter, <code>ListVirtualNodes</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListVirtualNodes</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListVirtualNodes</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace ListVirtualNodesInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVirtualNodesInput) => any;
}
/**
 * <p>An object that represents a virtual node returned by a list operation.</p>
 */
export interface VirtualNodeRef {
  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual node.</p>
   */
  virtualNodeName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;
  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;
  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual node.</p>
   */
  arn: string | undefined;
  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}
export declare namespace VirtualNodeRef {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualNodeRef) => any;
}
/**
 *
 */
export interface ListVirtualNodesOutput {
  /**
   * <p>The list of existing virtual nodes for the specified service mesh.</p>
   */
  virtualNodes: VirtualNodeRef[] | undefined;
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualNodes</code>
   *          request. When the results of a <code>ListVirtualNodes</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}
export declare namespace ListVirtualNodesOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVirtualNodesOutput) => any;
}
/**
 *
 */
export interface UpdateVirtualNodeInput {
  /**
   * <p>The name of the virtual node to update.</p>
   */
  virtualNodeName: string | undefined;
  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The new virtual node specification to apply. This overwrites the existing data.</p>
   */
  spec: VirtualNodeSpec | undefined;
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace UpdateVirtualNodeInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateVirtualNodeInput) => any;
}
/**
 *
 */
export interface UpdateVirtualNodeOutput {
  /**
   * <p>A full description of the virtual node that was updated.</p>
   */
  virtualNode: VirtualNodeData | undefined;
}
export declare namespace UpdateVirtualNodeOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateVirtualNodeOutput) => any;
}
/**
 * <p>An object that represents a virtual router listener.</p>
 */
export interface VirtualRouterListener {
  /**
   * <p>An object that represents a port mapping.</p>
   */
  portMapping: PortMapping | undefined;
}
export declare namespace VirtualRouterListener {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualRouterListener) => any;
}
/**
 * <p>An object that represents the specification of a virtual router.</p>
 */
export interface VirtualRouterSpec {
  /**
   * <p>The listeners that the virtual router is expected to receive inbound traffic from. You
   *          can specify one listener.</p>
   */
  listeners?: VirtualRouterListener[];
}
export declare namespace VirtualRouterSpec {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualRouterSpec) => any;
}
/**
 *
 */
export interface CreateVirtualRouterInput {
  /**
   * <p>The name to use for the virtual router.</p>
   */
  virtualRouterName: string | undefined;
  /**
   * <p>The name of the service mesh to create the virtual router in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The virtual router specification to apply.</p>
   */
  spec: VirtualRouterSpec | undefined;
  /**
   * <p>Optional metadata that you can apply to the virtual router to assist with categorization
   *          and organization. Each tag consists of a key and an optional value, both of which you
   *          define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace CreateVirtualRouterInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateVirtualRouterInput) => any;
}
export declare enum VirtualRouterStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}
/**
 * <p>An object that represents the status of a virtual router. </p>
 */
export interface VirtualRouterStatus {
  /**
   * <p>The current status of the virtual router.</p>
   */
  status: VirtualRouterStatusCode | string | undefined;
}
export declare namespace VirtualRouterStatus {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualRouterStatus) => any;
}
/**
 * <p>An object that represents a virtual router returned by a describe operation.</p>
 */
export interface VirtualRouterData {
  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual router.</p>
   */
  virtualRouterName: string | undefined;
  /**
   * <p>The specifications of the virtual router.</p>
   */
  spec: VirtualRouterSpec | undefined;
  /**
   * <p>The associated metadata for the virtual router.</p>
   */
  metadata: ResourceMetadata | undefined;
  /**
   * <p>The current status of the virtual router.</p>
   */
  status: VirtualRouterStatus | undefined;
}
export declare namespace VirtualRouterData {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualRouterData) => any;
}
/**
 *
 */
export interface CreateVirtualRouterOutput {
  /**
   * <p>The full description of your virtual router following the create call.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}
export declare namespace CreateVirtualRouterOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateVirtualRouterOutput) => any;
}
/**
 *
 */
export interface DeleteVirtualRouterInput {
  /**
   * <p>The name of the virtual router to delete.</p>
   */
  virtualRouterName: string | undefined;
  /**
   * <p>The name of the service mesh to delete the virtual router in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace DeleteVirtualRouterInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVirtualRouterInput) => any;
}
/**
 *
 */
export interface DeleteVirtualRouterOutput {
  /**
   * <p>The virtual router that was deleted.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}
export declare namespace DeleteVirtualRouterOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVirtualRouterOutput) => any;
}
/**
 *
 */
export interface DescribeVirtualRouterInput {
  /**
   * <p>The name of the virtual router to describe.</p>
   */
  virtualRouterName: string | undefined;
  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace DescribeVirtualRouterInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeVirtualRouterInput) => any;
}
/**
 *
 */
export interface DescribeVirtualRouterOutput {
  /**
   * <p>The full description of your virtual router.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}
export declare namespace DescribeVirtualRouterOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeVirtualRouterOutput) => any;
}
/**
 *
 */
export interface ListVirtualRoutersInput {
  /**
   * <p>The name of the service mesh to list virtual routers in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualRouters</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results returned by <code>ListVirtualRouters</code> in paginated
   *          output. When you use this parameter, <code>ListVirtualRouters</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListVirtualRouters</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListVirtualRouters</code> returns up to 100 results and
   *          a <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace ListVirtualRoutersInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVirtualRoutersInput) => any;
}
/**
 * <p>An object that represents a virtual router returned by a list operation.</p>
 */
export interface VirtualRouterRef {
  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual router.</p>
   */
  virtualRouterName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;
  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;
  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual router.</p>
   */
  arn: string | undefined;
  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}
export declare namespace VirtualRouterRef {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualRouterRef) => any;
}
/**
 *
 */
export interface ListVirtualRoutersOutput {
  /**
   * <p>The list of existing virtual routers for the specified service mesh.</p>
   */
  virtualRouters: VirtualRouterRef[] | undefined;
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualRouters</code>
   *          request. When the results of a <code>ListVirtualRouters</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}
export declare namespace ListVirtualRoutersOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVirtualRoutersOutput) => any;
}
/**
 * <p>An object that represents a target and its relative weight. Traffic is distributed
 *          across targets according to their relative weight. For example, a weighted target with a
 *          relative weight of 50 receives five times as much traffic as one with a relative weight of
 *          10. The total weight for all targets combined must be less than or equal to 100.</p>
 */
export interface WeightedTarget {
  /**
   * <p>The virtual node to associate with the weighted target.</p>
   */
  virtualNode: string | undefined;
  /**
   * <p>The relative weight of the weighted target.</p>
   */
  weight: number | undefined;
}
export declare namespace WeightedTarget {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: WeightedTarget) => any;
}
/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface GrpcRouteAction {
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: WeightedTarget[] | undefined;
}
export declare namespace GrpcRouteAction {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GrpcRouteAction) => any;
}
/**
 * <p>An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.</p>
 */
export interface MatchRange {
  /**
   * <p>The start of the range.</p>
   */
  start: number | undefined;
  /**
   * <p>The end of the range.</p>
   */
  end: number | undefined;
}
export declare namespace MatchRange {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: MatchRange) => any;
}
/**
 * <p>An object that represents the match method. Specify one of the match values.</p>
 */
export declare type GrpcRouteMetadataMatchMethod =
  | GrpcRouteMetadataMatchMethod.ExactMember
  | GrpcRouteMetadataMatchMethod.PrefixMember
  | GrpcRouteMetadataMatchMethod.RangeMember
  | GrpcRouteMetadataMatchMethod.RegexMember
  | GrpcRouteMetadataMatchMethod.SuffixMember
  | GrpcRouteMetadataMatchMethod.$UnknownMember;
export declare namespace GrpcRouteMetadataMatchMethod {
  /**
   * <p>The value sent by the client must match the specified value exactly.</p>
   */
  interface ExactMember {
    exact: string;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>The value sent by the client must include the specified characters.</p>
   */
  interface RegexMember {
    exact?: never;
    regex: string;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents the range of values to match on.</p>
   */
  interface RangeMember {
    exact?: never;
    regex?: never;
    range: MatchRange;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>The value sent by the client must begin with the specified characters.</p>
   */
  interface PrefixMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix: string;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>The value sent by the client must end with the specified characters.</p>
   */
  interface SuffixMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix: string;
    $unknown?: never;
  }
  interface $UnknownMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    exact: (value: string) => T;
    regex: (value: string) => T;
    range: (value: MatchRange) => T;
    prefix: (value: string) => T;
    suffix: (value: string) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: GrpcRouteMetadataMatchMethod, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GrpcRouteMetadataMatchMethod) => any;
}
/**
 * <p>An object that represents the match metadata for the route.</p>
 */
export interface GrpcRouteMetadata {
  /**
   * <p>The name of the route.</p>
   */
  name: string | undefined;
  /**
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.</p>
   */
  invert?: boolean;
  /**
   * <p>An object that represents the data to match from the request.</p>
   */
  match?: GrpcRouteMetadataMatchMethod;
}
export declare namespace GrpcRouteMetadata {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GrpcRouteMetadata) => any;
}
/**
 * <p>An object that represents the criteria for determining a request match.</p>
 */
export interface GrpcRouteMatch {
  /**
   * <p>The fully qualified domain name for the service to match from the request.</p>
   */
  serviceName?: string;
  /**
   * <p>The method name to match from the request. If you specify a name, you must also specify
   *          a <code>serviceName</code>.</p>
   */
  methodName?: string;
  /**
   * <p>An object that represents the data to match from the request.</p>
   */
  metadata?: GrpcRouteMetadata[];
}
export declare namespace GrpcRouteMatch {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GrpcRouteMatch) => any;
}
export declare enum GrpcRetryPolicyEvent {
  CANCELLED = "cancelled",
  DEADLINE_EXCEEDED = "deadline-exceeded",
  INTERNAL = "internal",
  RESOURCE_EXHAUSTED = "resource-exhausted",
  UNAVAILABLE = "unavailable",
}
export declare enum TcpRetryPolicyEvent {
  CONNECTION_ERROR = "connection-error",
}
/**
 * <p>An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.</p>
 */
export interface GrpcRetryPolicy {
  /**
   * <p>The timeout for each retry attempt.</p>
   */
  perRetryTimeout: Duration | undefined;
  /**
   * <p>The maximum number of retry attempts.</p>
   */
  maxRetries: number | undefined;
  /**
   * <p>Specify at least one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>server-error</b> – HTTP status codes 500, 501,
   *                   502, 503, 504, 505, 506, 507, 508, 510, and 511</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>gateway-error</b> – HTTP status codes 502,
   *                   503, and 504</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>client-error</b> – HTTP status code 409</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>stream-error</b> – Retry on refused
   *                   stream</p>
   *             </li>
   *          </ul>
   */
  httpRetryEvents?: string[];
  /**
   * <p>Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.</p>
   */
  tcpRetryEvents?: (TcpRetryPolicyEvent | string)[];
  /**
   * <p>Specify at least one of the valid values.</p>
   */
  grpcRetryEvents?: (GrpcRetryPolicyEvent | string)[];
}
export declare namespace GrpcRetryPolicy {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GrpcRetryPolicy) => any;
}
/**
 * <p>An object that represents a gRPC route type.</p>
 */
export interface GrpcRoute {
  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: GrpcRouteAction | undefined;
  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: GrpcRouteMatch | undefined;
  /**
   * <p>An object that represents a retry policy.</p>
   */
  retryPolicy?: GrpcRetryPolicy;
  /**
   * <p>An object that represents types of timeouts. </p>
   */
  timeout?: GrpcTimeout;
}
export declare namespace GrpcRoute {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GrpcRoute) => any;
}
/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface HttpRouteAction {
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: WeightedTarget[] | undefined;
}
export declare namespace HttpRouteAction {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HttpRouteAction) => any;
}
/**
 * <p>An object that represents the method and value to match with the header value sent in a
 *          request. Specify one match method.</p>
 */
export declare type HeaderMatchMethod =
  | HeaderMatchMethod.ExactMember
  | HeaderMatchMethod.PrefixMember
  | HeaderMatchMethod.RangeMember
  | HeaderMatchMethod.RegexMember
  | HeaderMatchMethod.SuffixMember
  | HeaderMatchMethod.$UnknownMember;
export declare namespace HeaderMatchMethod {
  /**
   * <p>The value sent by the client must match the specified value exactly.</p>
   */
  interface ExactMember {
    exact: string;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>The value sent by the client must include the specified characters.</p>
   */
  interface RegexMember {
    exact?: never;
    regex: string;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>An object that represents the range of values to match on.</p>
   */
  interface RangeMember {
    exact?: never;
    regex?: never;
    range: MatchRange;
    prefix?: never;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>The value sent by the client must begin with the specified characters.</p>
   */
  interface PrefixMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix: string;
    suffix?: never;
    $unknown?: never;
  }
  /**
   * <p>The value sent by the client must end with the specified characters.</p>
   */
  interface SuffixMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix: string;
    $unknown?: never;
  }
  interface $UnknownMember {
    exact?: never;
    regex?: never;
    range?: never;
    prefix?: never;
    suffix?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    exact: (value: string) => T;
    regex: (value: string) => T;
    range: (value: MatchRange) => T;
    prefix: (value: string) => T;
    suffix: (value: string) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: HeaderMatchMethod, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HeaderMatchMethod) => any;
}
/**
 * <p>An object that represents the HTTP header in the request.</p>
 */
export interface HttpRouteHeader {
  /**
   * <p>A name for the HTTP header in the client request that will be matched on.</p>
   */
  name: string | undefined;
  /**
   * <p>Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.</p>
   */
  invert?: boolean;
  /**
   * <p>The <code>HeaderMatchMethod</code> object.</p>
   */
  match?: HeaderMatchMethod;
}
export declare namespace HttpRouteHeader {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HttpRouteHeader) => any;
}
export declare enum HttpMethod {
  CONNECT = "CONNECT",
  DELETE = "DELETE",
  GET = "GET",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
  TRACE = "TRACE",
}
export declare enum HttpScheme {
  HTTP = "http",
  HTTPS = "https",
}
/**
 * <p>An object that represents the requirements for a route to match HTTP requests for a
 *          virtual router.</p>
 */
export interface HttpRouteMatch {
  /**
   * <p>Specifies the path to match requests with. This parameter must always start with
   *             <code>/</code>, which by itself matches all requests to the virtual service name. You
   *          can also match for path-based routing of requests. For example, if your virtual service
   *          name is <code>my-service.local</code> and you want the route to match requests to
   *             <code>my-service.local/metrics</code>, your prefix should be
   *          <code>/metrics</code>.</p>
   */
  prefix: string | undefined;
  /**
   * <p>The client request method to match on. Specify only one.</p>
   */
  method?: HttpMethod | string;
  /**
   * <p>The client request scheme to match on. Specify only one.</p>
   */
  scheme?: HttpScheme | string;
  /**
   * <p>An object that represents the client request headers to match on.</p>
   */
  headers?: HttpRouteHeader[];
}
export declare namespace HttpRouteMatch {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HttpRouteMatch) => any;
}
/**
 * <p>An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.</p>
 */
export interface HttpRetryPolicy {
  /**
   * <p>The timeout for each retry attempt.</p>
   */
  perRetryTimeout: Duration | undefined;
  /**
   * <p>The maximum number of retry attempts.</p>
   */
  maxRetries: number | undefined;
  /**
   * <p>Specify at least one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>server-error</b> – HTTP status codes 500, 501,
   *                   502, 503, 504, 505, 506, 507, 508, 510, and 511</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>gateway-error</b> – HTTP status codes 502,
   *                   503, and 504</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>client-error</b> – HTTP status code 409</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>stream-error</b> – Retry on refused
   *                   stream</p>
   *             </li>
   *          </ul>
   */
  httpRetryEvents?: string[];
  /**
   * <p>Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.</p>
   */
  tcpRetryEvents?: (TcpRetryPolicyEvent | string)[];
}
export declare namespace HttpRetryPolicy {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HttpRetryPolicy) => any;
}
/**
 * <p>An object that represents an HTTP or HTTP/2 route type.</p>
 */
export interface HttpRoute {
  /**
   * <p>An object that represents the criteria for determining a request match.</p>
   */
  match: HttpRouteMatch | undefined;
  /**
   * <p>An object that represents the action to take if a match is determined.</p>
   */
  action: HttpRouteAction | undefined;
  /**
   * <p>An object that represents a retry policy.</p>
   */
  retryPolicy?: HttpRetryPolicy;
  /**
   * <p>An object that represents types of timeouts. </p>
   */
  timeout?: HttpTimeout;
}
export declare namespace HttpRoute {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HttpRoute) => any;
}
/**
 * <p>An object that represents the action to take if a match is determined.</p>
 */
export interface TcpRouteAction {
  /**
   * <p>An object that represents the targets that traffic is routed to when a request matches the route.</p>
   */
  weightedTargets: WeightedTarget[] | undefined;
}
export declare namespace TcpRouteAction {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TcpRouteAction) => any;
}
/**
 * <p>An object that represents a TCP route type.</p>
 */
export interface TcpRoute {
  /**
   * <p>The action to take if a match is determined.</p>
   */
  action: TcpRouteAction | undefined;
  /**
   * <p>An object that represents types of timeouts. </p>
   */
  timeout?: TcpTimeout;
}
export declare namespace TcpRoute {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TcpRoute) => any;
}
/**
 * <p>An object that represents a route specification. Specify one route type.</p>
 */
export interface RouteSpec {
  /**
   * <p>The priority for the route. Routes are matched based on the specified value, where 0 is
   *          the highest priority.</p>
   */
  priority?: number;
  /**
   * <p>An object that represents the specification of an HTTP route.</p>
   */
  httpRoute?: HttpRoute;
  /**
   * <p>An object that represents the specification of a TCP route.</p>
   */
  tcpRoute?: TcpRoute;
  /**
   * <p>An object that represents the specification of an HTTP/2 route.</p>
   */
  http2Route?: HttpRoute;
  /**
   * <p>An object that represents the specification of a gRPC route.</p>
   */
  grpcRoute?: GrpcRoute;
}
export declare namespace RouteSpec {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RouteSpec) => any;
}
/**
 *
 */
export interface CreateRouteInput {
  /**
   * <p>The name to use for the route.</p>
   */
  routeName: string | undefined;
  /**
   * <p>The name of the service mesh to create the route in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual router in which to create the route. If the virtual router is in
   *          a shared mesh, then you must be the owner of the virtual router resource.</p>
   */
  virtualRouterName: string | undefined;
  /**
   * <p>The route specification to apply.</p>
   */
  spec: RouteSpec | undefined;
  /**
   * <p>Optional metadata that you can apply to the route to assist with categorization and
   *          organization. Each tag consists of a key and an optional value, both of which you define.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace CreateRouteInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateRouteInput) => any;
}
export declare enum RouteStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}
/**
 * <p>An object that represents the current status of a route.</p>
 */
export interface RouteStatus {
  /**
   * <p>The current status for the route.</p>
   */
  status: RouteStatusCode | string | undefined;
}
export declare namespace RouteStatus {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RouteStatus) => any;
}
/**
 * <p>An object that represents a route returned by a describe operation.</p>
 */
export interface RouteData {
  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;
  /**
   * <p>The name of the route.</p>
   */
  routeName: string | undefined;
  /**
   * <p>The specifications of the route.</p>
   */
  spec: RouteSpec | undefined;
  /**
   * <p>The associated metadata for the route.</p>
   */
  metadata: ResourceMetadata | undefined;
  /**
   * <p>The status of the route.</p>
   */
  status: RouteStatus | undefined;
}
export declare namespace RouteData {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RouteData) => any;
}
/**
 *
 */
export interface CreateRouteOutput {
  /**
   * <p>The full description of your mesh following the create call.</p>
   */
  route: RouteData | undefined;
}
export declare namespace CreateRouteOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateRouteOutput) => any;
}
/**
 *
 */
export interface DeleteRouteInput {
  /**
   * <p>The name of the route to delete.</p>
   */
  routeName: string | undefined;
  /**
   * <p>The name of the service mesh to delete the route in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual router to delete the route in.</p>
   */
  virtualRouterName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace DeleteRouteInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteRouteInput) => any;
}
/**
 *
 */
export interface DeleteRouteOutput {
  /**
   * <p>The route that was deleted.</p>
   */
  route: RouteData | undefined;
}
export declare namespace DeleteRouteOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteRouteOutput) => any;
}
/**
 *
 */
export interface DescribeRouteInput {
  /**
   * <p>The name of the route to describe.</p>
   */
  routeName: string | undefined;
  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
  /**
   * <p>The name of the virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;
}
export declare namespace DescribeRouteInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeRouteInput) => any;
}
/**
 *
 */
export interface DescribeRouteOutput {
  /**
   * <p>The full description of your route.</p>
   */
  route: RouteData | undefined;
}
export declare namespace DescribeRouteOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeRouteOutput) => any;
}
/**
 *
 */
export interface ListRoutesInput {
  /**
   * <p>The name of the service mesh to list routes in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual router to list routes in.</p>
   */
  virtualRouterName: string | undefined;
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListRoutes</code> request where <code>limit</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous
   *          results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results returned by <code>ListRoutes</code> in paginated output.
   *          When you use this parameter, <code>ListRoutes</code> returns only <code>limit</code>
   *          results in a single page along with a <code>nextToken</code> response element. You can see
   *          the remaining results of the initial request by sending another <code>ListRoutes</code>
   *          request with the returned <code>nextToken</code> value. This value can be between
   *          1 and 100. If you don't use this parameter,
   *             <code>ListRoutes</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace ListRoutesInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListRoutesInput) => any;
}
/**
 * <p>An object that represents a route returned by a list operation.</p>
 */
export interface RouteRef {
  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;
  /**
   * <p>The name of the route.</p>
   */
  routeName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;
  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;
  /**
   * <p>The full Amazon Resource Name (ARN) for the route.</p>
   */
  arn: string | undefined;
  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}
export declare namespace RouteRef {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RouteRef) => any;
}
/**
 *
 */
export interface ListRoutesOutput {
  /**
   * <p>The list of existing routes for the specified service mesh and virtual router.</p>
   */
  routes: RouteRef[] | undefined;
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListRoutes</code> request.
   *          When the results of a <code>ListRoutes</code> request exceed <code>limit</code>, you can
   *          use this value to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  nextToken?: string;
}
export declare namespace ListRoutesOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListRoutesOutput) => any;
}
/**
 *
 */
export interface UpdateRouteInput {
  /**
   * <p>The name of the route to update.</p>
   */
  routeName: string | undefined;
  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual router that the route is associated with.</p>
   */
  virtualRouterName: string | undefined;
  /**
   * <p>The new route specification to apply. This overwrites the existing data.</p>
   */
  spec: RouteSpec | undefined;
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace UpdateRouteInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateRouteInput) => any;
}
/**
 *
 */
export interface UpdateRouteOutput {
  /**
   * <p>A full description of the route that was updated.</p>
   */
  route: RouteData | undefined;
}
export declare namespace UpdateRouteOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateRouteOutput) => any;
}
/**
 *
 */
export interface UpdateVirtualRouterInput {
  /**
   * <p>The name of the virtual router to update.</p>
   */
  virtualRouterName: string | undefined;
  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The new virtual router specification to apply. This overwrites the existing data.</p>
   */
  spec: VirtualRouterSpec | undefined;
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace UpdateVirtualRouterInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateVirtualRouterInput) => any;
}
/**
 *
 */
export interface UpdateVirtualRouterOutput {
  /**
   * <p>A full description of the virtual router that was updated.</p>
   */
  virtualRouter: VirtualRouterData | undefined;
}
export declare namespace UpdateVirtualRouterOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateVirtualRouterOutput) => any;
}
/**
 * <p>An object that represents a virtual node service provider.</p>
 */
export interface VirtualNodeServiceProvider {
  /**
   * <p>The name of the virtual node that is acting as a service provider.</p>
   */
  virtualNodeName: string | undefined;
}
export declare namespace VirtualNodeServiceProvider {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualNodeServiceProvider) => any;
}
/**
 * <p>An object that represents a virtual node service provider.</p>
 */
export interface VirtualRouterServiceProvider {
  /**
   * <p>The name of the virtual router that is acting as a service provider.</p>
   */
  virtualRouterName: string | undefined;
}
export declare namespace VirtualRouterServiceProvider {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualRouterServiceProvider) => any;
}
/**
 * <p>An object that represents the provider for a virtual service.</p>
 */
export declare type VirtualServiceProvider =
  | VirtualServiceProvider.VirtualNodeMember
  | VirtualServiceProvider.VirtualRouterMember
  | VirtualServiceProvider.$UnknownMember;
export declare namespace VirtualServiceProvider {
  /**
   * <p>The virtual node associated with a virtual service.</p>
   */
  interface VirtualNodeMember {
    virtualNode: VirtualNodeServiceProvider;
    virtualRouter?: never;
    $unknown?: never;
  }
  /**
   * <p>The virtual router associated with a virtual service.</p>
   */
  interface VirtualRouterMember {
    virtualNode?: never;
    virtualRouter: VirtualRouterServiceProvider;
    $unknown?: never;
  }
  interface $UnknownMember {
    virtualNode?: never;
    virtualRouter?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    virtualNode: (value: VirtualNodeServiceProvider) => T;
    virtualRouter: (value: VirtualRouterServiceProvider) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: VirtualServiceProvider, visitor: Visitor<T>) => T;
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualServiceProvider) => any;
}
/**
 * <p>An object that represents the specification of a virtual service.</p>
 */
export interface VirtualServiceSpec {
  /**
   * <p>The App Mesh object that is acting as the provider for a virtual service. You can specify
   *          a single virtual node or virtual router.</p>
   */
  provider?: VirtualServiceProvider;
}
export declare namespace VirtualServiceSpec {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualServiceSpec) => any;
}
/**
 *
 */
export interface CreateVirtualServiceInput {
  /**
   * <p>The name to use for the virtual service.</p>
   */
  virtualServiceName: string | undefined;
  /**
   * <p>The name of the service mesh to create the virtual service in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The virtual service specification to apply.</p>
   */
  spec: VirtualServiceSpec | undefined;
  /**
   * <p>Optional metadata that you can apply to the virtual service to assist with
   *          categorization and organization. Each tag consists of a key and an optional value, both of
   *          which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: TagRef[];
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
   *                the account that you specify must share the mesh with your account before you can create
   *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace CreateVirtualServiceInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateVirtualServiceInput) => any;
}
export declare enum VirtualServiceStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  INACTIVE = "INACTIVE",
}
/**
 * <p>An object that represents the status of a virtual service.</p>
 */
export interface VirtualServiceStatus {
  /**
   * <p>The current status of the virtual service.</p>
   */
  status: VirtualServiceStatusCode | string | undefined;
}
export declare namespace VirtualServiceStatus {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualServiceStatus) => any;
}
/**
 * <p>An object that represents a virtual service returned by a describe operation.</p>
 */
export interface VirtualServiceData {
  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual service.</p>
   */
  virtualServiceName: string | undefined;
  /**
   * <p>The specifications of the virtual service.</p>
   */
  spec: VirtualServiceSpec | undefined;
  /**
   * <p>An object that represents metadata for a resource.</p>
   */
  metadata: ResourceMetadata | undefined;
  /**
   * <p>The current status of the virtual service.</p>
   */
  status: VirtualServiceStatus | undefined;
}
export declare namespace VirtualServiceData {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualServiceData) => any;
}
/**
 *
 */
export interface CreateVirtualServiceOutput {
  /**
   * <p>The full description of your virtual service following the create call.</p>
   */
  virtualService: VirtualServiceData | undefined;
}
export declare namespace CreateVirtualServiceOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateVirtualServiceOutput) => any;
}
/**
 *
 */
export interface DeleteVirtualServiceInput {
  /**
   * <p>The name of the virtual service to delete.</p>
   */
  virtualServiceName: string | undefined;
  /**
   * <p>The name of the service mesh to delete the virtual service in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace DeleteVirtualServiceInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVirtualServiceInput) => any;
}
/**
 *
 */
export interface DeleteVirtualServiceOutput {
  /**
   * <p>The virtual service that was deleted.</p>
   */
  virtualService: VirtualServiceData | undefined;
}
export declare namespace DeleteVirtualServiceOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVirtualServiceOutput) => any;
}
/**
 *
 */
export interface DescribeVirtualServiceInput {
  /**
   * <p>The name of the virtual service to describe.</p>
   */
  virtualServiceName: string | undefined;
  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace DescribeVirtualServiceInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeVirtualServiceInput) => any;
}
/**
 *
 */
export interface DescribeVirtualServiceOutput {
  /**
   * <p>The full description of your virtual service.</p>
   */
  virtualService: VirtualServiceData | undefined;
}
export declare namespace DescribeVirtualServiceOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeVirtualServiceOutput) => any;
}
/**
 *
 */
export interface ListVirtualServicesInput {
  /**
   * <p>The name of the service mesh to list virtual services in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListVirtualServices</code> request where <code>limit</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results returned by <code>ListVirtualServices</code> in paginated
   *          output. When you use this parameter, <code>ListVirtualServices</code> returns only
   *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
   *          element. You can see the remaining results of the initial request by sending another
   *             <code>ListVirtualServices</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If you don't use this
   *          parameter, <code>ListVirtualServices</code> returns up to 100 results and
   *          a <code>nextToken</code> value if applicable.</p>
   */
  limit?: number;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace ListVirtualServicesInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVirtualServicesInput) => any;
}
/**
 * <p>An object that represents a virtual service returned by a list operation.</p>
 */
export interface VirtualServiceRef {
  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The name of the virtual service.</p>
   */
  virtualServiceName: string | undefined;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner: string | undefined;
  /**
   * <p>The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
   *                the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  resourceOwner: string | undefined;
  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual service.</p>
   */
  arn: string | undefined;
  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.</p>
   */
  version: number | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | undefined;
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | undefined;
}
export declare namespace VirtualServiceRef {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VirtualServiceRef) => any;
}
/**
 *
 */
export interface ListVirtualServicesOutput {
  /**
   * <p>The list of existing virtual services for the specified service mesh.</p>
   */
  virtualServices: VirtualServiceRef[] | undefined;
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListVirtualServices</code>
   *          request. When the results of a <code>ListVirtualServices</code> request exceed
   *             <code>limit</code>, you can use this value to retrieve the next page of results. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}
export declare namespace ListVirtualServicesOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVirtualServicesOutput) => any;
}
/**
 *
 */
export interface UpdateVirtualServiceInput {
  /**
   * <p>The name of the virtual service to update.</p>
   */
  virtualServiceName: string | undefined;
  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string | undefined;
  /**
   * <p>The new virtual service specification to apply. This overwrites the existing
   *          data.</p>
   */
  spec: VirtualServiceSpec | undefined;
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;
  /**
   * <p>The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
   *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.</p>
   */
  meshOwner?: string;
}
export declare namespace UpdateVirtualServiceInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateVirtualServiceInput) => any;
}
/**
 *
 */
export interface UpdateVirtualServiceOutput {
  /**
   * <p>A full description of the virtual service that was updated.</p>
   */
  virtualService: VirtualServiceData | undefined;
}
export declare namespace UpdateVirtualServiceOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateVirtualServiceOutput) => any;
}
/**
 *
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to.</p>
   */
  resourceArn: string | undefined;
  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags: TagRef[] | undefined;
}
export declare namespace TagResourceInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagResourceInput) => any;
}
/**
 *
 */
export interface TagResourceOutput {}
export declare namespace TagResourceOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagResourceOutput) => any;
}
/**
 * <p>The request exceeds the maximum allowed number of tags allowed per resource. The current
 *          limit is 50 user tags per resource. You must reduce the number of tags in the request. None
 *          of the tags in this request were applied.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
}
export declare namespace TooManyTagsException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TooManyTagsException) => any;
}
/**
 *
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to delete tags from.</p>
   */
  resourceArn: string | undefined;
  /**
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}
export declare namespace UntagResourceInput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceInput) => any;
}
/**
 *
 */
export interface UntagResourceOutput {}
export declare namespace UntagResourceOutput {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceOutput) => any;
}
