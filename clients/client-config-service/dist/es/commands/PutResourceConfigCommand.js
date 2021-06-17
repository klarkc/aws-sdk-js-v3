import { __extends } from "tslib";
import { PutResourceConfigRequest } from "../models/models_1";
import { deserializeAws_json1_1PutResourceConfigCommand, serializeAws_json1_1PutResourceConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Records the configuration state for the resource provided in the request.
 *
 * 			The configuration state of a resource is represented in AWS Config as Configuration Items.
 * 			Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing AWS Config APIs. </p>
 * 		       <note>
 *             <p>The custom resource type must be registered with AWS CloudFormation. This API accepts the configuration item registered with AWS CloudFormation.</p>
 * 			         <p>When you call this API, AWS Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource.
 * 				</p>
 * 		          <p>Write-only schema properites are not recorded as part of the published configuration item.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourceConfigCommandInput} for command's `input` shape.
 * @see {@link PutResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutResourceConfigCommand = /** @class */ (function (_super) {
    __extends(PutResourceConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutResourceConfigCommand(input) {
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
    PutResourceConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "PutResourceConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutResourceConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutResourceConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutResourceConfigCommand(input, context);
    };
    PutResourceConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutResourceConfigCommand(output, context);
    };
    return PutResourceConfigCommand;
}($Command));
export { PutResourceConfigCommand };
//# sourceMappingURL=PutResourceConfigCommand.js.map