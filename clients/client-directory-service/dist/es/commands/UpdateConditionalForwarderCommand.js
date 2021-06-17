import { __extends } from "tslib";
import { UpdateConditionalForwarderRequest, UpdateConditionalForwarderResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateConditionalForwarderCommand, serializeAws_json1_1UpdateConditionalForwarderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a conditional forwarder that has been set up for your AWS directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateConditionalForwarderCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateConditionalForwarderCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new UpdateConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConditionalForwarderCommandInput} for command's `input` shape.
 * @see {@link UpdateConditionalForwarderCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConditionalForwarderCommand = /** @class */ (function (_super) {
    __extends(UpdateConditionalForwarderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateConditionalForwarderCommand(input) {
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
    UpdateConditionalForwarderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "UpdateConditionalForwarderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateConditionalForwarderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateConditionalForwarderResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateConditionalForwarderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateConditionalForwarderCommand(input, context);
    };
    UpdateConditionalForwarderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateConditionalForwarderCommand(output, context);
    };
    return UpdateConditionalForwarderCommand;
}($Command));
export { UpdateConditionalForwarderCommand };
//# sourceMappingURL=UpdateConditionalForwarderCommand.js.map