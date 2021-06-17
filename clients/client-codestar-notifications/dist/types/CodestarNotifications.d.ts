import { CodestarNotificationsClient } from "./CodestarNotificationsClient";
import { CreateNotificationRuleCommandInput, CreateNotificationRuleCommandOutput } from "./commands/CreateNotificationRuleCommand";
import { DeleteNotificationRuleCommandInput, DeleteNotificationRuleCommandOutput } from "./commands/DeleteNotificationRuleCommand";
import { DeleteTargetCommandInput, DeleteTargetCommandOutput } from "./commands/DeleteTargetCommand";
import { DescribeNotificationRuleCommandInput, DescribeNotificationRuleCommandOutput } from "./commands/DescribeNotificationRuleCommand";
import { ListEventTypesCommandInput, ListEventTypesCommandOutput } from "./commands/ListEventTypesCommand";
import { ListNotificationRulesCommandInput, ListNotificationRulesCommandOutput } from "./commands/ListNotificationRulesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTargetsCommandInput, ListTargetsCommandOutput } from "./commands/ListTargetsCommand";
import { SubscribeCommandInput, SubscribeCommandOutput } from "./commands/SubscribeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnsubscribeCommandInput, UnsubscribeCommandOutput } from "./commands/UnsubscribeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateNotificationRuleCommandInput, UpdateNotificationRuleCommandOutput } from "./commands/UpdateNotificationRuleCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the
 *       operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API
 *       to work with the following objects:</p>
 *
 *          <p>Notification rules, by calling the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateNotificationRule</a>, which creates a notification rule for a
 *                     resource in your account. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteNotificationRule</a>, which deletes a notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeNotificationRule</a>, which provides information about a notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListNotificationRules</a>, which lists the notification rules associated with
 *           your account. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateNotificationRule</a>, which changes the name, events, or targets associated with a
 *           notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Subscribe</a>, which subscribes a target to a notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Unsubscribe</a>, which removes a target from a notification rule. </p>
 *             </li>
 *          </ul>
 *
 *          <p>Targets, by calling the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteTarget</a>, which removes a notification rule target (SNS topic) from a
 *           notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTargets</a>, which lists the targets associated with a
 *                     notification rule. </p>
 *             </li>
 *          </ul>
 *
 *          <p>Events, by calling the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListEventTypes</a>, which lists the event types you can include in
 *                     a notification rule. </p>
 *             </li>
 *          </ul>
 *          <p>Tags, by calling the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a>, which lists the tags already associated
 *                     with a notification rule in your account. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>, which associates a tag you provide with a
 *                     notification rule in your account. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>, which removes a tag from a notification rule in
 *                     your account. </p>
 *             </li>
 *          </ul>
 *
 *
 *
 *          <p> For information about how to use AWS CodeStar Notifications, see link in the CodeStarNotifications User Guide.
 *     </p>
 */
export declare class CodestarNotifications extends CodestarNotificationsClient {
    /**
     * <p>Creates a notification rule for a resource. The rule specifies the events you want
     *             notifications about and the targets (such as SNS topics) where you want to receive
     *             them.</p>
     */
    createNotificationRule(args: CreateNotificationRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateNotificationRuleCommandOutput>;
    createNotificationRule(args: CreateNotificationRuleCommandInput, cb: (err: any, data?: CreateNotificationRuleCommandOutput) => void): void;
    createNotificationRule(args: CreateNotificationRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNotificationRuleCommandOutput) => void): void;
    /**
     * <p>Deletes a notification rule for a resource.</p>
     */
    deleteNotificationRule(args: DeleteNotificationRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNotificationRuleCommandOutput>;
    deleteNotificationRule(args: DeleteNotificationRuleCommandInput, cb: (err: any, data?: DeleteNotificationRuleCommandOutput) => void): void;
    deleteNotificationRule(args: DeleteNotificationRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNotificationRuleCommandOutput) => void): void;
    /**
     * <p>Deletes a specified target for notifications.</p>
     */
    deleteTarget(args: DeleteTargetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTargetCommandOutput>;
    deleteTarget(args: DeleteTargetCommandInput, cb: (err: any, data?: DeleteTargetCommandOutput) => void): void;
    deleteTarget(args: DeleteTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTargetCommandOutput) => void): void;
    /**
     * <p>Returns information about a specified notification rule.</p>
     */
    describeNotificationRule(args: DescribeNotificationRuleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNotificationRuleCommandOutput>;
    describeNotificationRule(args: DescribeNotificationRuleCommandInput, cb: (err: any, data?: DescribeNotificationRuleCommandOutput) => void): void;
    describeNotificationRule(args: DescribeNotificationRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNotificationRuleCommandOutput) => void): void;
    /**
     * <p>Returns information about the event types available for configuring notifications.</p>
     */
    listEventTypes(args: ListEventTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListEventTypesCommandOutput>;
    listEventTypes(args: ListEventTypesCommandInput, cb: (err: any, data?: ListEventTypesCommandOutput) => void): void;
    listEventTypes(args: ListEventTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEventTypesCommandOutput) => void): void;
    /**
     * <p>Returns a list of the notification rules for an AWS account.</p>
     */
    listNotificationRules(args: ListNotificationRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListNotificationRulesCommandOutput>;
    listNotificationRules(args: ListNotificationRulesCommandInput, cb: (err: any, data?: ListNotificationRulesCommandOutput) => void): void;
    listNotificationRules(args: ListNotificationRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNotificationRulesCommandOutput) => void): void;
    /**
     * <p>Returns a list of the tags associated with a notification rule.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Returns a list of the notification rule targets for an AWS account.</p>
     */
    listTargets(args: ListTargetsCommandInput, options?: __HttpHandlerOptions): Promise<ListTargetsCommandOutput>;
    listTargets(args: ListTargetsCommandInput, cb: (err: any, data?: ListTargetsCommandOutput) => void): void;
    listTargets(args: ListTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTargetsCommandOutput) => void): void;
    /**
     * <p>Creates an association between a notification rule and an SNS topic so that the
     *             associated target can receive notifications when the events described in the rule are
     *             triggered.</p>
     */
    subscribe(args: SubscribeCommandInput, options?: __HttpHandlerOptions): Promise<SubscribeCommandOutput>;
    subscribe(args: SubscribeCommandInput, cb: (err: any, data?: SubscribeCommandOutput) => void): void;
    subscribe(args: SubscribeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SubscribeCommandOutput) => void): void;
    /**
     * <p>Associates a set of provided tags with a notification rule.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes an association between a notification rule and an Amazon SNS topic so that
     *             subscribers to that topic stop receiving notifications when the events described in the
     *             rule are triggered.</p>
     */
    unsubscribe(args: UnsubscribeCommandInput, options?: __HttpHandlerOptions): Promise<UnsubscribeCommandOutput>;
    unsubscribe(args: UnsubscribeCommandInput, cb: (err: any, data?: UnsubscribeCommandOutput) => void): void;
    unsubscribe(args: UnsubscribeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UnsubscribeCommandOutput) => void): void;
    /**
     * <p>Removes the association between one or more provided tags and a notification
     *             rule.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates a notification rule for a resource. You can change the events that trigger the
     *             notification rule, the status of the rule, and the targets that receive the
     *             notifications.</p>
     *          <note>
     *             <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p>
     *          </note>
     */
    updateNotificationRule(args: UpdateNotificationRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNotificationRuleCommandOutput>;
    updateNotificationRule(args: UpdateNotificationRuleCommandInput, cb: (err: any, data?: UpdateNotificationRuleCommandOutput) => void): void;
    updateNotificationRule(args: UpdateNotificationRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNotificationRuleCommandOutput) => void): void;
}
