import { HealthClient } from "./HealthClient";
import { DescribeAffectedAccountsForOrganizationCommandInput, DescribeAffectedAccountsForOrganizationCommandOutput } from "./commands/DescribeAffectedAccountsForOrganizationCommand";
import { DescribeAffectedEntitiesCommandInput, DescribeAffectedEntitiesCommandOutput } from "./commands/DescribeAffectedEntitiesCommand";
import { DescribeAffectedEntitiesForOrganizationCommandInput, DescribeAffectedEntitiesForOrganizationCommandOutput } from "./commands/DescribeAffectedEntitiesForOrganizationCommand";
import { DescribeEntityAggregatesCommandInput, DescribeEntityAggregatesCommandOutput } from "./commands/DescribeEntityAggregatesCommand";
import { DescribeEventAggregatesCommandInput, DescribeEventAggregatesCommandOutput } from "./commands/DescribeEventAggregatesCommand";
import { DescribeEventDetailsCommandInput, DescribeEventDetailsCommandOutput } from "./commands/DescribeEventDetailsCommand";
import { DescribeEventDetailsForOrganizationCommandInput, DescribeEventDetailsForOrganizationCommandOutput } from "./commands/DescribeEventDetailsForOrganizationCommand";
import { DescribeEventTypesCommandInput, DescribeEventTypesCommandOutput } from "./commands/DescribeEventTypesCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import { DescribeEventsForOrganizationCommandInput, DescribeEventsForOrganizationCommandOutput } from "./commands/DescribeEventsForOrganizationCommand";
import { DescribeHealthServiceStatusForOrganizationCommandInput, DescribeHealthServiceStatusForOrganizationCommandOutput } from "./commands/DescribeHealthServiceStatusForOrganizationCommand";
import { DisableHealthServiceAccessForOrganizationCommandInput, DisableHealthServiceAccessForOrganizationCommandOutput } from "./commands/DisableHealthServiceAccessForOrganizationCommand";
import { EnableHealthServiceAccessForOrganizationCommandInput, EnableHealthServiceAccessForOrganizationCommandOutput } from "./commands/EnableHealthServiceAccessForOrganizationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Health</fullname>
 *
 *          <p>The AWS Health API provides programmatic access to the AWS Health information that
 *          appears in the <a href="https://phd.aws.amazon.com/phd/home#/">AWS Personal Health Dashboard</a>. You
 *          can use the API operations to get information about AWS Health events that affect your
 *          AWS services and resources.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a> to use the
 *                   AWS Health API. If you call the AWS Health API from an AWS account that
 *                   doesn't have a Business or Enterprise Support plan, you receive a
 *                      <code>SubscriptionRequiredException</code> error.</p>
 *                </li>
 *                <li>
 *                   <p>You can use the AWS Health endpoint health.us-east-1.amazonaws.com (HTTPS) to
 *                   call the AWS Health API operations. AWS Health supports a multi-Region
 *                   application architecture and has two regional endpoints in an active-passive
 *                   configuration. You can use the high availability endpoint example to determine
 *                   which AWS Region is active, so that you can get the latest information from the
 *                   API. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/health-api.html">Accessing the AWS Health API</a> in the
 *                      <i>AWS Health User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>For authentication of requests, AWS Health uses the <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *             Process</a>.</p>
 *          <p>If your AWS account is part of AWS Organizations, you can use the AWS Health organizational
 *          view feature. This feature provides a centralized view of AWS Health events across all
 *          accounts in your organization. You can aggregate AWS Health events in real time to
 *          identify accounts in your organization that are affected by an operational event or get
 *          notified of security vulnerabilities. Use the organizational view API operations to enable
 *          this feature and return event information. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
 *             AWS Health events</a> in the <i>AWS Health User Guide</i>.</p>
 *          <note>
 *             <p>When you use the AWS Health API operations to return AWS Health events, see the
 *             following recommendations:</p>
 *             <ul>
 *                <li>
 *                   <p>Use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a> parameter to specify whether to return AWS Health
 *                   events that are public or account-specific.</p>
 *                </li>
 *                <li>
 *                   <p>Use pagination to view all events from the response. For example, if you call
 *                   the <code>DescribeEventsForOrganization</code> operation to get all events in your
 *                   organization, you might receive several page results. Specify the
 *                      <code>nextToken</code> in the next request to return more results.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export declare class Health extends HealthClient {
    /**
     * <p>Returns a list of accounts in the organization from AWS Organizations that are affected by the
     *          provided event. For more information about the different types of AWS Health events, see
     *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>. </p>
     *          <p>Before you can call this operation, you must first enable AWS Health to work with
     *          AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
     *          management account.</p>
     *          <note>
     *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
     *          </note>
     */
    describeAffectedAccountsForOrganization(args: DescribeAffectedAccountsForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAffectedAccountsForOrganizationCommandOutput>;
    describeAffectedAccountsForOrganization(args: DescribeAffectedAccountsForOrganizationCommandInput, cb: (err: any, data?: DescribeAffectedAccountsForOrganizationCommandOutput) => void): void;
    describeAffectedAccountsForOrganization(args: DescribeAffectedAccountsForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAffectedAccountsForOrganizationCommandOutput) => void): void;
    /**
     * <p>Returns a list of entities that have been affected by the specified events, based on the
     *          specified filter criteria. Entities can refer to individual customer resources, groups of
     *          customer resources, or any other construct, depending on the AWS service. Events that
     *          have impact beyond that of the affected entities, or where the extent of impact is unknown,
     *          include at least one entity indicating this.</p>
     *          <p>At least one event ARN is required. Results are sorted by the
     *             <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p>
     *
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
     *                </li>
     *                <li>
     *                   <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific AWS Health events. For more
     *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>AWS Health User Guide</i>.</p>
     *                </li>
     *             </ul>
     *          </note>
     */
    describeAffectedEntities(args: DescribeAffectedEntitiesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAffectedEntitiesCommandOutput>;
    describeAffectedEntities(args: DescribeAffectedEntitiesCommandInput, cb: (err: any, data?: DescribeAffectedEntitiesCommandOutput) => void): void;
    describeAffectedEntities(args: DescribeAffectedEntitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAffectedEntitiesCommandOutput) => void): void;
    /**
     * <p>Returns a list of entities that have been affected by one or more events for one or more
     *          accounts in your organization in AWS Organizations, based on the filter criteria. Entities can refer
     *          to individual customer resources, groups of customer resources, or any other construct,
     *          depending on the AWS service.</p>
     *          <p>At least one event Amazon Resource Name (ARN) and account ID are required. Results are
     *          sorted by the <code>lastUpdatedTime</code> of the entity, starting with the most
     *          recent.</p>
     *          <p>Before you can call this operation, you must first enable AWS Health to work with
     *          AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a>
     *          operation from your organization's management account.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
     *                </li>
     *                <li>
     *                   <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific AWS Health events. For more
     *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>AWS Health User Guide</i>.</p>
     *                </li>
     *             </ul>
     *
     *          </note>
     */
    describeAffectedEntitiesForOrganization(args: DescribeAffectedEntitiesForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput>;
    describeAffectedEntitiesForOrganization(args: DescribeAffectedEntitiesForOrganizationCommandInput, cb: (err: any, data?: DescribeAffectedEntitiesForOrganizationCommandOutput) => void): void;
    describeAffectedEntitiesForOrganization(args: DescribeAffectedEntitiesForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAffectedEntitiesForOrganizationCommandOutput) => void): void;
    /**
     * <p>Returns the number of entities that are affected by each of the specified events. If no
     *          events are specified, the counts of all affected entities are returned.</p>
     */
    describeEntityAggregates(args: DescribeEntityAggregatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEntityAggregatesCommandOutput>;
    describeEntityAggregates(args: DescribeEntityAggregatesCommandInput, cb: (err: any, data?: DescribeEntityAggregatesCommandOutput) => void): void;
    describeEntityAggregates(args: DescribeEntityAggregatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEntityAggregatesCommandOutput) => void): void;
    /**
     * <p>Returns the number of events of each event type (issue, scheduled change, and account
     *          notification). If no filter is specified, the counts of all events in each category are
     *          returned.</p>
     *          <note>
     *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
     *          </note>
     */
    describeEventAggregates(args: DescribeEventAggregatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventAggregatesCommandOutput>;
    describeEventAggregates(args: DescribeEventAggregatesCommandInput, cb: (err: any, data?: DescribeEventAggregatesCommandOutput) => void): void;
    describeEventAggregates(args: DescribeEventAggregatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventAggregatesCommandOutput) => void): void;
    /**
     * <p>Returns detailed information about one or more specified events. Information includes
     *          standard event data (AWS Region, service, and so on, as returned by <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a>), a detailed event description, and possible additional metadata
     *          that depends upon the nature of the event. Affected entities are not included. To retrieve
     *          the entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.</p>
     *          <p>If a specified event can't be retrieved, an error message is returned for that
     *          event.</p>
     *          <note>
     *             <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific AWS Health events. For more
     *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>AWS Health User Guide</i>.</p>
     *          </note>
     */
    describeEventDetails(args: DescribeEventDetailsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventDetailsCommandOutput>;
    describeEventDetails(args: DescribeEventDetailsCommandInput, cb: (err: any, data?: DescribeEventDetailsCommandOutput) => void): void;
    describeEventDetails(args: DescribeEventDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventDetailsCommandOutput) => void): void;
    /**
     * <p>Returns detailed information about one or more specified events for one or more AWS
     *          accounts in your organization. This information includes standard event data (such as the
     *          AWS Region and service), an event description, and (depending on the event) possible
     *          metadata. This operation doesn't return affected entities, such as the resources related to
     *          the event. To return affected entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation.</p>
     *          <note>
     *             <p>Before you can call this operation, you must first enable AWS Health to work with
     *             AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
     *             management account.</p>
     *          </note>
     *          <p>When you call the <code>DescribeEventDetailsForOrganization</code> operation, specify
     *          the <code>organizationEventDetailFilters</code> object in the request. Depending on the
     *          AWS Health event type, note the following differences:</p>
     *          <ul>
     *             <li>
     *                <p>To return event details for a public event, you must specify a null value for the
     *                   <code>awsAccountId</code> parameter. If you specify an account ID for a public
     *                event, AWS Health returns an error message because public events aren't specific to
     *                an account.</p>
     *             </li>
     *             <li>
     *                <p>To return event details for an event that is specific to an account in your
     *                organization,  you must specify the <code>awsAccountId</code> parameter in the
     *                request. If you don't specify an account ID, AWS Health returns an error message
     *                because the event is specific to an account in your organization. </p>
     *             </li>
     *          </ul>
     *          <p>For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
     *
     *          <note>
     *             <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific AWS Health events. For more
     *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>AWS Health User Guide</i>.</p>
     *          </note>
     */
    describeEventDetailsForOrganization(args: DescribeEventDetailsForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventDetailsForOrganizationCommandOutput>;
    describeEventDetailsForOrganization(args: DescribeEventDetailsForOrganizationCommandInput, cb: (err: any, data?: DescribeEventDetailsForOrganizationCommandOutput) => void): void;
    describeEventDetailsForOrganization(args: DescribeEventDetailsForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventDetailsForOrganizationCommandOutput) => void): void;
    /**
     * <p> Returns information about events that meet the specified filter criteria. Events are
     *          returned in a summary form and do not include the detailed description, any additional
     *          metadata that depends on the event type, or any affected resources. To retrieve that
     *          information, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operations.</p>
     *          <p>If no filter criteria are specified, all events are returned. Results are sorted by
     *             <code>lastModifiedTime</code>, starting with the most recent event.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>When you call the <code>DescribeEvents</code> operation and specify an entity
     *                   for the <code>entityValues</code> parameter, AWS Health might return public
     *                   events that aren't specific to that resource. For example, if you call
     *                      <code>DescribeEvents</code> and specify an ID for an Amazon Elastic Compute Cloud (Amazon EC2)
     *                   instance, AWS Health might return events that aren't specific to that resource or
     *                   service. To get events that are specific to a service, use the
     *                      <code>services</code> parameter in the <code>filter</code> object. For more
     *                   information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
     *                </li>
     *                <li>
     *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
     *                </li>
     *             </ul>
     *          </note>
     */
    describeEvents(args: DescribeEventsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsCommandOutput>;
    describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    describeEvents(args: DescribeEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    /**
     * <p>Returns information about events across your organization in AWS Organizations. You can use
     *             the<code>filters</code> parameter to specify the events that you want to return. Events
     *          are returned in a summary form and don't include the affected accounts, detailed
     *          description, any additional metadata that depends on the event type, or any affected
     *          resources. To retrieve that information, use the following operations:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html">DescribeAffectedAccountsForOrganization</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>If you don't specify a <code>filter</code>, the
     *             <code>DescribeEventsForOrganizations</code> returns all events across your organization.
     *          Results are sorted by <code>lastModifiedTime</code>, starting with the most recent event. </p>
     *          <p>For more information about the different types of AWS Health events, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
     *          <p>Before you can call this operation, you must first enable AWS Health to work with
     *          AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
     *          management account.</p>
     *          <note>
     *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
     *          </note>
     */
    describeEventsForOrganization(args: DescribeEventsForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsForOrganizationCommandOutput>;
    describeEventsForOrganization(args: DescribeEventsForOrganizationCommandInput, cb: (err: any, data?: DescribeEventsForOrganizationCommandOutput) => void): void;
    describeEventsForOrganization(args: DescribeEventsForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsForOrganizationCommandOutput) => void): void;
    /**
     * <p>Returns the event types that meet the specified filter criteria. You can use this API
     *          operation to find information about the AWS Health event, such as the category, AWS
     *          service, and event code. The metadata for each event appears in the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventType.html">EventType</a> object. </p>
     *          <p>If you don't specify a filter criteria, the API operation returns all event types, in no
     *          particular order.  </p>
     *          <note>
     *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
     *          </note>
     */
    describeEventTypes(args: DescribeEventTypesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventTypesCommandOutput>;
    describeEventTypes(args: DescribeEventTypesCommandInput, cb: (err: any, data?: DescribeEventTypesCommandOutput) => void): void;
    describeEventTypes(args: DescribeEventTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventTypesCommandOutput) => void): void;
    /**
     * <p>This operation provides status information on enabling or disabling AWS Health to work
     *          with your organization. To call this operation, you must sign in as an IAM user, assume
     *          an IAM role, or sign in as the root user (not recommended) in the organization's
     *          management account.</p>
     */
    describeHealthServiceStatusForOrganization(args: DescribeHealthServiceStatusForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput>;
    describeHealthServiceStatusForOrganization(args: DescribeHealthServiceStatusForOrganizationCommandInput, cb: (err: any, data?: DescribeHealthServiceStatusForOrganizationCommandOutput) => void): void;
    describeHealthServiceStatusForOrganization(args: DescribeHealthServiceStatusForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHealthServiceStatusForOrganizationCommandOutput) => void): void;
    /**
     * <p>Disables AWS Health from working with AWS Organizations. To call this operation, you must sign
     *          in as an AWS Identity and Access Management (IAM) user, assume an IAM role, or sign in as the root user (not
     *          recommended) in the organization's management account. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
     *             AWS Health events</a> in the
     *             <i>AWS Health User Guide</i>.</p>
     *          <p>This operation doesn't remove the service-linked role from the management account in your organization. You must use the IAM console, API, or AWS Command Line Interface (AWS CLI) to
     *          remove the service-linked role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#delete-service-linked-role">Deleting a Service-Linked Role</a> in the
     *          <i>IAM User Guide</i>.</p>
     *          <note>
     *             <p>You can also disable the organizational feature by using the Organizations <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html">DisableAWSServiceAccess</a> API operation. After you call this operation,
     *             AWS Health stops aggregating events for all other AWS accounts in your organization.
     *             If you call the AWS Health API operations for organizational view, AWS Health returns
     *             an error. AWS Health continues to aggregate health events for your AWS
     *             account.</p>
     *          </note>
     */
    disableHealthServiceAccessForOrganization(args: DisableHealthServiceAccessForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DisableHealthServiceAccessForOrganizationCommandOutput>;
    disableHealthServiceAccessForOrganization(args: DisableHealthServiceAccessForOrganizationCommandInput, cb: (err: any, data?: DisableHealthServiceAccessForOrganizationCommandOutput) => void): void;
    disableHealthServiceAccessForOrganization(args: DisableHealthServiceAccessForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableHealthServiceAccessForOrganizationCommandOutput) => void): void;
    /**
     * <p>Enables AWS Health to work with AWS Organizations. You can use the organizational view feature
     *          to aggregate events from all AWS accounts in your organization in a centralized location. </p>
     *          <p>This operation also creates a service-linked role for the management account in the
     *          organization. </p>
     *          <note>
     *             <p>To call this operation, you must meet the following requirements:</p>
     *             <ul>
     *                <li>
     *                   <p>You must have a Business or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a> to use the AWS Health
     *                   API. If you call the AWS Health API from an AWS account that doesn't have a
     *                   Business or Enterprise Support plan, you receive a
     *                      <code>SubscriptionRequiredException</code> error.</p>
     *                </li>
     *                <li>
     *                   <p>You must have permission to call this operation from the organization's
     *                   management account. For example IAM policies, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html">AWS Health
     *                      identity-based policy examples</a>.</p>
     *                </li>
     *             </ul>
     *          </note>
     *          <p>If you don't have the required support plan, you can instead use the AWS Health console
     *          to enable the organizational view feature. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
     *             AWS Health events</a> in the <i>AWS Health User Guide</i>.</p>
     */
    enableHealthServiceAccessForOrganization(args: EnableHealthServiceAccessForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<EnableHealthServiceAccessForOrganizationCommandOutput>;
    enableHealthServiceAccessForOrganization(args: EnableHealthServiceAccessForOrganizationCommandInput, cb: (err: any, data?: EnableHealthServiceAccessForOrganizationCommandOutput) => void): void;
    enableHealthServiceAccessForOrganization(args: EnableHealthServiceAccessForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableHealthServiceAccessForOrganizationCommandOutput) => void): void;
}
