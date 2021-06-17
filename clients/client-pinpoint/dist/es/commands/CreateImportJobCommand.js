import { __extends } from "tslib";
import { CreateImportJobRequest, CreateImportJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateImportJobCommand, serializeAws_restJson1CreateImportJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an import job for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateImportJobCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateImportJobCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateImportJobCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateImportJobCommand = /** @class */ (function (_super) {
    __extends(CreateImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateImportJobCommand(input) {
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
    CreateImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "CreateImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateImportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateImportJobCommand(input, context);
    };
    CreateImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateImportJobCommand(output, context);
    };
    return CreateImportJobCommand;
}($Command));
export { CreateImportJobCommand };
//# sourceMappingURL=CreateImportJobCommand.js.map