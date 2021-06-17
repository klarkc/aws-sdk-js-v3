import { __extends } from "tslib";
import { DescribePrincipalIdFormatRequest, DescribePrincipalIdFormatResult } from "../models/models_3";
import { deserializeAws_ec2DescribePrincipalIdFormatCommand, serializeAws_ec2DescribePrincipalIdFormatCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the ID format settings for the root user and all IAM roles and IAM users
 *             that have explicitly specified a longer ID (17-character ID) preference. </p>
 *          <p>By default, all IAM roles and IAM users default to the same ID settings as the root user, unless they
 *             explicitly override the settings. This request is useful for identifying those IAM users and IAM roles
 *             that have overridden the default ID settings.</p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *           <code>network-acl</code> | <code>network-acl-association</code> |
 *           <code>network-interface</code> | <code>network-interface-attachment</code> |
 *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *           <code>route-table-association</code> | <code>security-group</code> |
 *           <code>snapshot</code> | <code>subnet</code> |
 *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
 *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePrincipalIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePrincipalIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribePrincipalIdFormatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePrincipalIdFormatCommandInput} for command's `input` shape.
 * @see {@link DescribePrincipalIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePrincipalIdFormatCommand = /** @class */ (function (_super) {
    __extends(DescribePrincipalIdFormatCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePrincipalIdFormatCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DescribePrincipalIdFormatCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribePrincipalIdFormatCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePrincipalIdFormatRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePrincipalIdFormatResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePrincipalIdFormatCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribePrincipalIdFormatCommand(input, context);
    };
    DescribePrincipalIdFormatCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribePrincipalIdFormatCommand(output, context);
    };
    return DescribePrincipalIdFormatCommand;
}($Command));
export { DescribePrincipalIdFormatCommand };
//# sourceMappingURL=DescribePrincipalIdFormatCommand.js.map