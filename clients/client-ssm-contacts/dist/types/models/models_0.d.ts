import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum AcceptType {
    DELIVERED = "DELIVERED",
    READ = "READ"
}
export interface AcceptPageRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the engagement to a contact channel.</p>
     */
    PageId: string | undefined;
    /**
     * <p>The ARN of the contact channel.</p>
     */
    ContactChannelId?: string;
    /**
     * <p>The type indicates if the page was <code>DELIVERED</code> or <code>READ</code>.</p>
     */
    AcceptType: AcceptType | string | undefined;
    /**
     * <p>Information provided by the user when the user acknowledges the page.</p>
     */
    Note?: string;
    /**
     * <p>The accept code is a 6-digit code used to acknowledge the page.</p>
     */
    AcceptCode: string | undefined;
}
export declare namespace AcceptPageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptPageRequest) => any;
}
export interface AcceptPageResult {
}
export declare namespace AcceptPageResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptPageResult) => any;
}
/**
 * <p>You don't have sufficient access to perform this action.</p>
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
/**
 * <p>Unexpected error occurred while
 *          processing the request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    Message: string | undefined;
    /**
     * Advice to clients on when the call can be safely retried
     */
    RetryAfterSeconds?: number;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>Request references a resource that
 *          doesn't
 *          exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message: string | undefined;
    /**
     * Hypothetical resource identifier that was not found
     */
    ResourceId: string | undefined;
    /**
     * Hypothetical resource type that was not found
     */
    ResourceType: string | undefined;
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
    Message: string | undefined;
    /**
     * Service Quotas requirement to identify originating service
     */
    QuotaCode?: string;
    /**
     * Service Quotas requirement to identify originating quota
     */
    ServiceCode?: string;
    /**
     * Advice to clients on when the call can be safely retried
     */
    RetryAfterSeconds?: number;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
/**
 * <p>Provides information about which field caused the exception.</p>
 */
export interface ValidationExceptionField {
    /**
     * <p>The name of the field that caused the exception.</p>
     */
    Name: string | undefined;
    /**
     * <p>Information about what caused the field to cause an exception.</p>
     */
    Message: string | undefined;
}
export declare namespace ValidationExceptionField {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationExceptionField) => any;
}
export declare enum ValidationExceptionReason {
    CANNOT_PARSE = "CANNOT_PARSE",
    FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
    OTHER = "OTHER",
    UNKNOWN_OPERATION = "UNKNOWN_OPERATION"
}
/**
 * <p>The input fails to satisfy the constraints specified by an
 *          AWS
 *          service.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    Message: string | undefined;
    /**
     * Reason the request failed validation
     */
    Reason?: ValidationExceptionReason | string;
    /**
     * The fields that caused the error
     */
    Fields?: ValidationExceptionField[];
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export interface ActivateContactChannelRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
     */
    ContactChannelId: string | undefined;
    /**
     * <p>The code sent to the contact channel when it was created in the contact. </p>
     */
    ActivationCode: string | undefined;
}
export declare namespace ActivateContactChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ActivateContactChannelRequest) => any;
}
export interface ActivateContactChannelResult {
}
export declare namespace ActivateContactChannelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ActivateContactChannelResult) => any;
}
export declare enum ActivationStatus {
    ACTIVATED = "ACTIVATED",
    NOT_ACTIVATED = "NOT_ACTIVATED"
}
/**
 * <p>Information about the contact channel that Incident Manager uses to engage the
 *          contact.</p>
 */
export interface ChannelTargetInfo {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
     */
    ContactChannelId: string | undefined;
    /**
     * <p>The number of minutes to wait to retry sending engagement in the case the engagement
     *          initially fails.</p>
     */
    RetryIntervalInMinutes?: number;
}
export declare namespace ChannelTargetInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChannelTargetInfo) => any;
}
export declare enum ChannelType {
    EMAIL = "EMAIL",
    SMS = "SMS",
    VOICE = "VOICE"
}
/**
 * <p>Updating or deleting a resource causes an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    Message: string | undefined;
    /**
     * Identifier of the resource in use
     */
    ResourceId: string | undefined;
    /**
     * ype of the resource in use
     */
    ResourceType: string | undefined;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
export declare enum ContactType {
    ESCALATION = "ESCALATION",
    PERSONAL = "PERSONAL"
}
/**
 * <p>A personal contact or escalation plan that Incident Manager engages during an
 *          incident.</p>
 */
export interface Contact {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
     */
    ContactArn: string | undefined;
    /**
     * <p>The unique and identifiable alias of the contact or escalation plan.</p>
     */
    Alias: string | undefined;
    /**
     * <p>The full name of the contact or escalation plan.</p>
     */
    DisplayName?: string;
    /**
     * <p>Refers to the type of contact. A single contact is type <code>PERSONAL</code> and an
     *          escalation plan is type <code>ESCALATION</code>.</p>
     */
    Type: ContactType | string | undefined;
}
export declare namespace Contact {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Contact) => any;
}
/**
 * <p>The details that Incident Manager uses when trying to engage the contact channel. </p>
 */
export interface ContactChannelAddress {
    /**
     * <p>The format is dependent on the type of the contact channel. The following are the
     *          expected formats:</p>
     *          <ul>
     *             <li>
     *                <p>SMS - '+' followed by the country code and phone number</p>
     *             </li>
     *             <li>
     *                <p>VOICE - '+' followed by the country code and phone number</p>
     *             </li>
     *             <li>
     *                <p>EMAIL - any standard email format</p>
     *             </li>
     *          </ul>
     */
    SimpleAddress?: string;
}
export declare namespace ContactChannelAddress {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContactChannelAddress) => any;
}
/**
 * <p>The method that Incident Manager uses to engage a contact.</p>
 */
export interface ContactChannel {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
     */
    ContactChannelArn: string | undefined;
    /**
     * <p>The ARN of the contact that contains the contact channel.</p>
     */
    ContactArn: string | undefined;
    /**
     * <p>The name of the contact channel.</p>
     */
    Name: string | undefined;
    /**
     * <p>The type of the contact channel. Incident Manager supports three contact methods:</p>
     *          <ul>
     *             <li>
     *                <p>SMS</p>
     *             </li>
     *             <li>
     *                <p>VOICE</p>
     *             </li>
     *             <li>
     *                <p>EMAIL</p>
     *             </li>
     *          </ul>
     */
    Type?: ChannelType | string;
    /**
     * <p>The details that Incident Manager uses when trying to engage the contact channel.</p>
     */
    DeliveryAddress: ContactChannelAddress | undefined;
    /**
     * <p>A Boolean value describing if the contact channel has been activated or not. If the
     *          contact channel isn't activated, Incident Manager can't engage the contact through it. </p>
     */
    ActivationStatus: ActivationStatus | string | undefined;
}
export declare namespace ContactChannel {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContactChannel) => any;
}
/**
 * <p>The contact that Incident Manager is engaging during an incident.</p>
 */
export interface ContactTargetInfo {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact.</p>
     */
    ContactId?: string;
    /**
     * <p>A Boolean value determining if the contact's acknowledgement stops the progress of
     *          stages in the plan.</p>
     */
    IsEssential: boolean | undefined;
}
export declare namespace ContactTargetInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContactTargetInfo) => any;
}
/**
 * <p>The contact or contact channel that is being engaged.</p>
 */
export interface Target {
    /**
     * <p>Information about the contact channel Incident Manager is engaging.</p>
     */
    ChannelTargetInfo?: ChannelTargetInfo;
    /**
     * <p>Information about the contact that Incident Manager is engaging.</p>
     */
    ContactTargetInfo?: ContactTargetInfo;
}
export declare namespace Target {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Target) => any;
}
/**
 * <p>A set amount of time that an escalation plan or engagement plan engages the specified
 *          contacts or contact methods.</p>
 */
export interface Stage {
    /**
     * <p>The time to wait until beginning the next stage.</p>
     */
    DurationInMinutes: number | undefined;
    /**
     * <p>The contacts or contact methods that the escalation plan or engagement plan is
     *          engaging.</p>
     */
    Targets: Target[] | undefined;
}
export declare namespace Stage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Stage) => any;
}
/**
 * <p>The stages that an escalation plan or engagement plan engages contacts and contact
 *          methods in.</p>
 */
export interface Plan {
    /**
     * <p>A list of stages that the escalation plan or engagement plan uses to engage contacts and
     *          contact methods.</p>
     */
    Stages: Stage[] | undefined;
}
export declare namespace Plan {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Plan) => any;
}
/**
 * <p>A container of a key-value name pair.</p>
 */
export interface Tag {
    /**
     * <p>Name of the
     *          object
     *          key.</p>
     */
    Key?: string;
    /**
     * <p>Value of the tag.</p>
     */
    Value?: string;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
export interface CreateContactRequest {
    /**
     * <p>The short name to quickly identify a contact or escalation plan. The contact alias must
     *          be unique and identifiable. </p>
     */
    Alias: string | undefined;
    /**
     * <p>The full name of the contact or escalation plan.  </p>
     */
    DisplayName?: string;
    /**
     * <p>To create an escalation plan use <code>ESCALATION</code>. To create a contact use
     *             <code>PERSONAL</code>.</p>
     */
    Type: ContactType | string | undefined;
    /**
     * <p>A list of stages. A contact has an engagement plan with stages that contact specified
     *          contact channels. An escalation plan uses stages that contact specified contacts. </p>
     */
    Plan: Plan | undefined;
    /**
     * <p>Adds a tag to the target. You can only tag resources created in the first Region of your
     *          replication set. </p>
     */
    Tags?: Tag[];
    /**
     * <p>A token ensuring that the action is called only once with the specified details.</p>
     */
    IdempotencyToken?: string;
}
export declare namespace CreateContactRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateContactRequest) => any;
}
export interface CreateContactResult {
    /**
     * <p>The Amazon Resource Name (ARN) of the created contact or escalation plan.</p>
     */
    ContactArn: string | undefined;
}
export declare namespace CreateContactResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateContactResult) => any;
}
/**
 * <p>The action failed to due an encryption key error.</p>
 */
export interface DataEncryptionException extends __SmithyException, $MetadataBearer {
    name: "DataEncryptionException";
    $fault: "client";
    Message: string | undefined;
}
export declare namespace DataEncryptionException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataEncryptionException) => any;
}
/**
 * <p>Request would cause a service quota to be exceeded.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaExceededException";
    $fault: "client";
    Message: string | undefined;
    /**
     * Identifier of the resource affected
     */
    ResourceId?: string;
    /**
     * Type of the resource affected
     */
    ResourceType?: string;
    /**
     * Service Quotas requirement to identify originating service
     */
    QuotaCode: string | undefined;
    /**
     * Service Quotas requirement to identify originating quota
     */
    ServiceCode: string | undefined;
}
export declare namespace ServiceQuotaExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaExceededException) => any;
}
export interface CreateContactChannelRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
     */
    ContactId: string | undefined;
    /**
     * <p>The name of the contact channel.</p>
     */
    Name: string | undefined;
    /**
     * <p>Incident Manager supports three types of contact channels:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>SMS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>VOICE</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>EMAIL</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Type: ChannelType | string | undefined;
    /**
     * <p>The details that Incident Manager uses when trying to engage the contact channel. The format
     *          is dependent on the type of the contact channel. The following are the expected
     *          formats:</p>
     *          <ul>
     *             <li>
     *                <p>SMS - '+' followed by the country code and phone number</p>
     *             </li>
     *             <li>
     *                <p>VOICE - '+' followed by the country code and phone number</p>
     *             </li>
     *             <li>
     *                <p>EMAIL - any standard email format</p>
     *             </li>
     *          </ul>
     */
    DeliveryAddress: ContactChannelAddress | undefined;
    /**
     * <p>If you want to activate the channel at a later time, you can choose to defer activation.
     *          Incident Manager can't engage your contact channel until it has been activated.</p>
     */
    DeferActivation?: boolean;
    /**
     * <p>A token ensuring that the action is called only once with the specified details.</p>
     */
    IdempotencyToken?: string;
}
export declare namespace CreateContactChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateContactChannelRequest) => any;
}
export interface CreateContactChannelResult {
    /**
     * <p>The ARN of the contact channel.</p>
     */
    ContactChannelArn: string | undefined;
}
export declare namespace CreateContactChannelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateContactChannelResult) => any;
}
export interface DeactivateContactChannelRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact channel you're deactivating.</p>
     */
    ContactChannelId: string | undefined;
}
export declare namespace DeactivateContactChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeactivateContactChannelRequest) => any;
}
export interface DeactivateContactChannelResult {
}
export declare namespace DeactivateContactChannelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeactivateContactChannelResult) => any;
}
export interface DeleteContactRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact that you're deleting.</p>
     */
    ContactId: string | undefined;
}
export declare namespace DeleteContactRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteContactRequest) => any;
}
export interface DeleteContactResult {
}
export declare namespace DeleteContactResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteContactResult) => any;
}
export interface DeleteContactChannelRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
     */
    ContactChannelId: string | undefined;
}
export declare namespace DeleteContactChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteContactChannelRequest) => any;
}
export interface DeleteContactChannelResult {
}
export declare namespace DeleteContactChannelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteContactChannelResult) => any;
}
export interface DescribeEngagementRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the engagement you want the details of.</p>
     */
    EngagementId: string | undefined;
}
export declare namespace DescribeEngagementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEngagementRequest) => any;
}
export interface DescribeEngagementResult {
    /**
     * <p>The ARN of the escalation plan or contacts involved in the engagement.</p>
     */
    ContactArn: string | undefined;
    /**
     * <p>The ARN of the engagement.</p>
     */
    EngagementArn: string | undefined;
    /**
     * <p>The user that started the engagement.</p>
     */
    Sender: string | undefined;
    /**
     * <p>The secure subject of the message that was sent to the contact. Use this field for
     *          engagements to <code>VOICE</code> and <code>EMAIL</code>.</p>
     */
    Subject: string | undefined;
    /**
     * <p>The secure content of the message that was sent to the contact. Use this field for
     *          engagements to <code>VOICE</code> and <code>EMAIL</code>.</p>
     */
    Content: string | undefined;
    /**
     * <p>The insecure subject of the message that was sent to the contact. Use this field for
     *          engagements to <code>SMS</code>.</p>
     */
    PublicSubject?: string;
    /**
     * <p>The insecure content of the message that was sent to the contact. Use this field for
     *          engagements to <code>SMS</code>.</p>
     */
    PublicContent?: string;
    /**
     * <p>The ARN of the incident in which the engagement occurred.</p>
     */
    IncidentId?: string;
    /**
     * <p>The time that the engagement started.</p>
     */
    StartTime?: Date;
    /**
     * <p>The time that the engagement ended.</p>
     */
    StopTime?: Date;
}
export declare namespace DescribeEngagementResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEngagementResult) => any;
}
export interface DescribePageRequest {
    /**
     * <p>The ID of the engagement to a contact channel.</p>
     */
    PageId: string | undefined;
}
export declare namespace DescribePageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePageRequest) => any;
}
export interface DescribePageResult {
    /**
     * <p>The Amazon Resource Name (ARN) of the engagement to a contact channel.</p>
     */
    PageArn: string | undefined;
    /**
     * <p>The ARN of the engagement that engaged the contact channel.</p>
     */
    EngagementArn: string | undefined;
    /**
     * <p>The ARN of the contact that was engaged.</p>
     */
    ContactArn: string | undefined;
    /**
     * <p>The user that started the engagement.</p>
     */
    Sender: string | undefined;
    /**
     * <p>The secure subject of the message that was sent to the contact. Use this field for
     *          engagements to <code>VOICE</code> and <code>EMAIL</code>.</p>
     */
    Subject: string | undefined;
    /**
     * <p>The secure content of the message that was sent to the contact. Use this field for
     *          engagements to <code>VOICE</code> and <code>EMAIL</code>.</p>
     */
    Content: string | undefined;
    /**
     * <p>The insecure subject of the message that was sent to the contact. Use this field for
     *          engagements to <code>SMS</code>.</p>
     */
    PublicSubject?: string;
    /**
     * <p>The insecure content of the message that was sent to the contact. Use this field for
     *          engagements to <code>SMS</code>.</p>
     */
    PublicContent?: string;
    /**
     * <p>The ARN of the incident that engaged the contact channel.</p>
     */
    IncidentId?: string;
    /**
     * <p>The time the engagement was sent to the contact channel.</p>
     */
    SentTime?: Date;
    /**
     * <p>The time that the contact channel acknowledged the engagement.</p>
     */
    ReadTime?: Date;
    /**
     * <p>The time that the contact channel received the engagement.</p>
     */
    DeliveryTime?: Date;
}
export declare namespace DescribePageResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePageResult) => any;
}
/**
 * <p>Incident Manager reaching out to a contact or escalation plan to engage contact during an
 *          incident.</p>
 */
export interface Engagement {
    /**
     * <p>The Amazon Resource Name (ARN) of the engagement.</p>
     */
    EngagementArn: string | undefined;
    /**
     * <p>The ARN of the escalation plan or contact that Incident Manager is engaging.</p>
     */
    ContactArn: string | undefined;
    /**
     * <p>The user that started the engagement.</p>
     */
    Sender: string | undefined;
    /**
     * <p>The ARN of the incident that's engaging the contact.</p>
     */
    IncidentId?: string;
    /**
     * <p>The time that the engagement began.</p>
     */
    StartTime?: Date;
    /**
     * <p>The time that the engagement ended.</p>
     */
    StopTime?: Date;
}
export declare namespace Engagement {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Engagement) => any;
}
export interface GetContactRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
     */
    ContactId: string | undefined;
}
export declare namespace GetContactRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetContactRequest) => any;
}
export interface GetContactResult {
    /**
     * <p>The ARN of the contact or escalation plan.</p>
     */
    ContactArn: string | undefined;
    /**
     * <p>The alias of the contact or escalation plan. The alias is unique and
     *          identifiable.</p>
     */
    Alias: string | undefined;
    /**
     * <p>The full name of the contact or escalation plan.</p>
     */
    DisplayName?: string;
    /**
     * <p>The type of contact, either <code>PERSONAL</code> or <code>ESCALATION</code>. </p>
     */
    Type: ContactType | string | undefined;
    /**
     * <p>Details about the specific timing or stages and targets of the escalation plan or
     *          engagement plan.</p>
     */
    Plan: Plan | undefined;
}
export declare namespace GetContactResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetContactResult) => any;
}
export interface GetContactChannelRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact channel you want information about.</p>
     */
    ContactChannelId: string | undefined;
}
export declare namespace GetContactChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetContactChannelRequest) => any;
}
export interface GetContactChannelResult {
    /**
     * <p>The ARN of the contact that the channel belongs to.</p>
     */
    ContactArn: string | undefined;
    /**
     * <p>The ARN of the contact channel.</p>
     */
    ContactChannelArn: string | undefined;
    /**
     * <p>The name of the contact channel</p>
     */
    Name: string | undefined;
    /**
     * <p>The type of contact channel. The type is <code>SMS</code>, <code>VOICE</code>, or
     *             <code>EMAIL</code>.</p>
     */
    Type: ChannelType | string | undefined;
    /**
     * <p>The details that Incident Manager uses when trying to engage the contact channel. </p>
     */
    DeliveryAddress: ContactChannelAddress | undefined;
    /**
     * <p>A Boolean value indicating if the contact channel has been activated or not.</p>
     */
    ActivationStatus?: ActivationStatus | string;
}
export declare namespace GetContactChannelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetContactChannelResult) => any;
}
export interface GetContactPolicyRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
     */
    ContactArn: string | undefined;
}
export declare namespace GetContactPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetContactPolicyRequest) => any;
}
export interface GetContactPolicyResult {
    /**
     * <p>The ARN of the contact or escalation plan.</p>
     */
    ContactArn?: string;
    /**
     * <p>Details about the resource policy attached to the contact or escalation plan.</p>
     */
    Policy?: string;
}
export declare namespace GetContactPolicyResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetContactPolicyResult) => any;
}
export interface ListContactChannelsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact. </p>
     */
    ContactId: string | undefined;
    /**
     * <p>The pagination token to continue to the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of contact channels per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListContactChannelsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListContactChannelsRequest) => any;
}
export interface ListContactChannelsResult {
    /**
     * <p>The pagination token to continue to the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of contact channels related to the specified contact.</p>
     */
    ContactChannels: ContactChannel[] | undefined;
}
export declare namespace ListContactChannelsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListContactChannelsResult) => any;
}
export interface ListContactsRequest {
    /**
     * <p>The pagination token to continue to the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of contacts and escalation plans per page of results.</p>
     */
    MaxResults?: number;
    /**
     * <p>Used to list only contacts who's aliases start with the specified prefix.</p>
     */
    AliasPrefix?: string;
    /**
     * <p>The type of contact. A contact is type <code>PERSONAL</code> and an escalation plan is
     *          type <code>ESCALATION</code>.</p>
     */
    Type?: ContactType | string;
}
export declare namespace ListContactsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListContactsRequest) => any;
}
export interface ListContactsResult {
    /**
     * <p>The pagination token to continue to the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of the contacts and escalation plans in your Incident Manager account.</p>
     */
    Contacts?: Contact[];
}
export declare namespace ListContactsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListContactsResult) => any;
}
/**
 * <p>A range of between two set times</p>
 */
export interface TimeRange {
    /**
     * <p>The start of the time range.</p>
     */
    StartTime?: Date;
    /**
     * <p>The end of the time range.</p>
     */
    EndTime?: Date;
}
export declare namespace TimeRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TimeRange) => any;
}
export interface ListEngagementsRequest {
    /**
     * <p>The pagination token to continue to the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of engagements per page of results.</p>
     */
    MaxResults?: number;
    /**
     * <p>The Amazon Resource Name (ARN) of the incident you're listing engagements for.</p>
     */
    IncidentId?: string;
    /**
     * <p>The time range to lists engagements for an incident.</p>
     */
    TimeRangeValue?: TimeRange;
}
export declare namespace ListEngagementsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEngagementsRequest) => any;
}
export interface ListEngagementsResult {
    /**
     * <p>The pagination token to continue to the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of each engagement that occurred during the specified time range of an
     *          incident.</p>
     */
    Engagements: Engagement[] | undefined;
}
export declare namespace ListEngagementsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEngagementsResult) => any;
}
export interface ListPageReceiptsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the engagement to a specific contact channel.</p>
     */
    PageId: string | undefined;
    /**
     * <p>The pagination token to continue to the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of acknowledgements per page of results.</p>
     */
    MaxResults?: number;
}
export declare namespace ListPageReceiptsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPageReceiptsRequest) => any;
}
export declare enum ReceiptType {
    DELIVERED = "DELIVERED",
    ERROR = "ERROR",
    READ = "READ",
    SENT = "SENT",
    STOP = "STOP"
}
/**
 * <p>Records events during an engagement.</p>
 */
export interface Receipt {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact channel Incident Manager engaged.</p>
     */
    ContactChannelArn?: string;
    /**
     * <p>The type follows the engagement cycle, <code>SENT</code>, <code>DELIVERED</code>, and
     *             <code>READ</code>.</p>
     */
    ReceiptType: ReceiptType | string | undefined;
    /**
     * <p>Information provided during the page acknowledgement.</p>
     */
    ReceiptInfo?: string;
    /**
     * <p>The time receipt was <code>SENT</code>, <code>DELIVERED</code>, or
     *          <code>READ</code>.</p>
     */
    ReceiptTime: Date | undefined;
}
export declare namespace Receipt {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Receipt) => any;
}
export interface ListPageReceiptsResult {
    /**
     * <p>The pagination token to continue to the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of each acknowledgement.</p>
     */
    Receipts?: Receipt[];
}
export declare namespace ListPageReceiptsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPageReceiptsResult) => any;
}
export interface ListPagesByContactRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact you are retrieving engagements for.</p>
     */
    ContactId: string | undefined;
    /**
     * <p>The pagination token to continue to the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of engagements to contact channels to list per page of results. </p>
     */
    MaxResults?: number;
}
export declare namespace ListPagesByContactRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPagesByContactRequest) => any;
}
/**
 * <p>Incident Manager engaging a contact's contact channel.</p>
 */
export interface Page {
    /**
     * <p>The Amazon Resource Name (ARN) of the page to the contact channel.</p>
     */
    PageArn: string | undefined;
    /**
     * <p>The ARN of the engagement that this page is part of.</p>
     */
    EngagementArn: string | undefined;
    /**
     * <p>The ARN of the contact that Incident Manager is engaging.</p>
     */
    ContactArn: string | undefined;
    /**
     * <p>The user that started the engagement.</p>
     */
    Sender: string | undefined;
    /**
     * <p>The ARN of the incident that's engaging the contact channel.</p>
     */
    IncidentId?: string;
    /**
     * <p>The time that Incident Manager engaged the contact channel.</p>
     */
    SentTime?: Date;
    /**
     * <p>The time the message was delivered to the contact channel.</p>
     */
    DeliveryTime?: Date;
    /**
     * <p>The time that the contact channel acknowledged engagement.</p>
     */
    ReadTime?: Date;
}
export declare namespace Page {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Page) => any;
}
export interface ListPagesByContactResult {
    /**
     * <p>The pagination token to continue to the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The list of engagements to a contact's contact channel.</p>
     */
    Pages: Page[] | undefined;
}
export declare namespace ListPagesByContactResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPagesByContactResult) => any;
}
export interface ListPagesByEngagementRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the engagement.</p>
     */
    EngagementId: string | undefined;
    /**
     * <p>The pagination token to continue to the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of engagements to contact channels to list per page of
     *          results.</p>
     */
    MaxResults?: number;
}
export declare namespace ListPagesByEngagementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPagesByEngagementRequest) => any;
}
export interface ListPagesByEngagementResult {
    /**
     * <p>The pagination token to continue to the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The list of engagements to contact channels.</p>
     */
    Pages: Page[] | undefined;
}
export declare namespace ListPagesByEngagementResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPagesByEngagementResult) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
     */
    ResourceARN: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResult {
    /**
     * <p>The tags related to the contact or escalation plan.</p>
     */
    Tags?: Tag[];
}
export declare namespace ListTagsForResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResult) => any;
}
export interface PutContactPolicyRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
     */
    ContactArn: string | undefined;
    /**
     * <p>Details of the resource policy.</p>
     */
    Policy: string | undefined;
}
export declare namespace PutContactPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutContactPolicyRequest) => any;
}
export interface PutContactPolicyResult {
}
export declare namespace PutContactPolicyResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutContactPolicyResult) => any;
}
export interface SendActivationCodeRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
     */
    ContactChannelId: string | undefined;
}
export declare namespace SendActivationCodeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SendActivationCodeRequest) => any;
}
export interface SendActivationCodeResult {
}
export declare namespace SendActivationCodeResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SendActivationCodeResult) => any;
}
export interface StartEngagementRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact being engaged.</p>
     */
    ContactId: string | undefined;
    /**
     * <p>The user that started the engagement.</p>
     */
    Sender: string | undefined;
    /**
     * <p>The secure subject of the message that was sent to the contact. Use this field for
     *          engagements to <code>VOICE</code> or <code>EMAIL</code>.</p>
     */
    Subject: string | undefined;
    /**
     * <p>The secure content of the message that was sent to the contact. Use this field for
     *          engagements to <code>VOICE</code> or <code>EMAIL</code>.</p>
     */
    Content: string | undefined;
    /**
     * <p>The insecure subject of the message that was sent to the contact. Use this field for
     *          engagements to <code>SMS</code>.</p>
     */
    PublicSubject?: string;
    /**
     * <p>The insecure content of the message that was sent to the contact. Use this field for
     *          engagements to <code>SMS</code>.</p>
     */
    PublicContent?: string;
    /**
     * <p>The ARN of the incident that the engagement is part of.</p>
     */
    IncidentId?: string;
    /**
     * <p>A token ensuring that the action is called only once with the specified details.</p>
     */
    IdempotencyToken?: string;
}
export declare namespace StartEngagementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartEngagementRequest) => any;
}
export interface StartEngagementResult {
    /**
     * <p>The ARN of the engagement.</p>
     */
    EngagementArn: string | undefined;
}
export declare namespace StartEngagementResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartEngagementResult) => any;
}
export interface StopEngagementRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the engagement.</p>
     */
    EngagementId: string | undefined;
    /**
     * <p>The reason that you're stopping the engagement. </p>
     */
    Reason?: string;
}
export declare namespace StopEngagementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopEngagementRequest) => any;
}
export interface StopEngagementResult {
}
export declare namespace StopEngagementResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopEngagementResult) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
     */
    ResourceARN: string | undefined;
    /**
     * <p>A list of tags that you are adding to the contact or escalation plan.</p>
     */
    Tags: Tag[] | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResult {
}
export declare namespace TagResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResult) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
     */
    ResourceARN: string | undefined;
    /**
     * <p>The key of the tag that you want to remove.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResult {
}
export declare namespace UntagResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResult) => any;
}
export interface UpdateContactRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact or escalation plan you're updating.</p>
     */
    ContactId: string | undefined;
    /**
     * <p>The full name of the contact or escalation plan.</p>
     */
    DisplayName?: string;
    /**
     * <p>A list of stages. A contact has an engagement plan with stages for specified contact
     *          channels. An escalation plan uses these stages to contact specified contacts. </p>
     */
    Plan?: Plan;
}
export declare namespace UpdateContactRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateContactRequest) => any;
}
export interface UpdateContactResult {
}
export declare namespace UpdateContactResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateContactResult) => any;
}
export interface UpdateContactChannelRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the contact channel you want to update.</p>
     */
    ContactChannelId: string | undefined;
    /**
     * <p>The name of the contact channel</p>
     */
    Name?: string;
    /**
     * <p>The details that Incident Manager uses when trying to engage the contact channel. </p>
     */
    DeliveryAddress?: ContactChannelAddress;
}
export declare namespace UpdateContactChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateContactChannelRequest) => any;
}
export interface UpdateContactChannelResult {
}
export declare namespace UpdateContactChannelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateContactChannelResult) => any;
}
