import { __extends } from "tslib";
import { CreateClusterSecurityGroupMessage, CreateClusterSecurityGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateClusterSecurityGroupCommand, serializeAws_queryCreateClusterSecurityGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Amazon Redshift security group. You use security groups to control access
 *             to non-VPC clusters.</p>
 *         <p>
 * For information about managing security groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateClusterSecurityGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateClusterSecurityGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateClusterSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateClusterSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateClusterSecurityGroupCommand = /** @class */ (function (_super) {
    __extends(CreateClusterSecurityGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClusterSecurityGroupCommand(input) {
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
    CreateClusterSecurityGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateClusterSecurityGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClusterSecurityGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClusterSecurityGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClusterSecurityGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateClusterSecurityGroupCommand(input, context);
    };
    CreateClusterSecurityGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateClusterSecurityGroupCommand(output, context);
    };
    return CreateClusterSecurityGroupCommand;
}($Command));
export { CreateClusterSecurityGroupCommand };
//# sourceMappingURL=CreateClusterSecurityGroupCommand.js.map