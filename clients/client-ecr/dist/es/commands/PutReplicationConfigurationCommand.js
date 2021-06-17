import { __extends } from "tslib";
import { PutReplicationConfigurationRequest, PutReplicationConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1PutReplicationConfigurationCommand, serializeAws_json1_1PutReplicationConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates the replication configuration for a registry. The existing
 *             replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the
 *             PutReplicationConfiguration API is called, a service-linked IAM role is created in
 *             your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using
 *                 Service-Linked Roles for Amazon ECR</a> in the
 *             <i>Amazon Elastic Container Registry User Guide</i>.</p>
 *         <note>
 *             <p>When configuring cross-account replication, the destination account must grant the
 *                 source account permission to replicate. This permission is controlled using a
 *                 registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutReplicationConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutReplicationConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutReplicationConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutReplicationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutReplicationConfigurationCommand(input) {
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
    PutReplicationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "PutReplicationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutReplicationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutReplicationConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutReplicationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutReplicationConfigurationCommand(input, context);
    };
    PutReplicationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutReplicationConfigurationCommand(output, context);
    };
    return PutReplicationConfigurationCommand;
}($Command));
export { PutReplicationConfigurationCommand };
//# sourceMappingURL=PutReplicationConfigurationCommand.js.map