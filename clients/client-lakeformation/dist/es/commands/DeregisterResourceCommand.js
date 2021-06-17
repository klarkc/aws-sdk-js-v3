import { __extends } from "tslib";
import { DeregisterResourceRequest, DeregisterResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1DeregisterResourceCommand, serializeAws_json1_1DeregisterResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters the resource as managed by the Data Catalog.</p>
 *
 *          <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeregisterResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeregisterResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new DeregisterResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterResourceCommandInput} for command's `input` shape.
 * @see {@link DeregisterResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterResourceCommand = /** @class */ (function (_super) {
    __extends(DeregisterResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterResourceCommand(input) {
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
    DeregisterResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "DeregisterResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterResourceCommand(input, context);
    };
    DeregisterResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterResourceCommand(output, context);
    };
    return DeregisterResourceCommand;
}($Command));
export { DeregisterResourceCommand };
//# sourceMappingURL=DeregisterResourceCommand.js.map