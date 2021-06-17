"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodestarNotificationsClient = void 0;
const runtimeConfig_1 = require("./runtimeConfig");
const config_resolver_1 = require("@aws-sdk/config-resolver");
const middleware_content_length_1 = require("@aws-sdk/middleware-content-length");
const middleware_host_header_1 = require("@aws-sdk/middleware-host-header");
const middleware_logger_1 = require("@aws-sdk/middleware-logger");
const middleware_retry_1 = require("@aws-sdk/middleware-retry");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const middleware_user_agent_1 = require("@aws-sdk/middleware-user-agent");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CodestarNotificationsClient extends smithy_client_1.Client {
    constructor(configuration) {
        let _config_0 = {
            ...runtimeConfig_1.ClientDefaultValues,
            ...configuration,
        };
        let _config_1 = config_resolver_1.resolveRegionConfig(_config_0);
        let _config_2 = config_resolver_1.resolveEndpointsConfig(_config_1);
        let _config_3 = middleware_retry_1.resolveRetryConfig(_config_2);
        let _config_4 = middleware_host_header_1.resolveHostHeaderConfig(_config_3);
        let _config_5 = middleware_signing_1.resolveAwsAuthConfig(_config_4);
        let _config_6 = middleware_user_agent_1.resolveUserAgentConfig(_config_5);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use(middleware_retry_1.getRetryPlugin(this.config));
        this.middlewareStack.use(middleware_content_length_1.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middleware_host_header_1.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(middleware_logger_1.getLoggerPlugin(this.config));
        this.middlewareStack.use(middleware_signing_1.getAwsAuthPlugin(this.config));
        this.middlewareStack.use(middleware_user_agent_1.getUserAgentPlugin(this.config));
    }
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy() {
        super.destroy();
    }
}
exports.CodestarNotificationsClient = CodestarNotificationsClient;
//# sourceMappingURL=CodestarNotificationsClient.js.map