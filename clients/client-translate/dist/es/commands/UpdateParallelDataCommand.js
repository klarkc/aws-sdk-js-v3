import { __extends } from "tslib";
import { UpdateParallelDataRequest, UpdateParallelDataResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateParallelDataCommand, serializeAws_json1_1UpdateParallelDataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a previously created parallel data resource by importing a new input file from
 *       Amazon S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, UpdateParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, UpdateParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new UpdateParallelDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateParallelDataCommandInput} for command's `input` shape.
 * @see {@link UpdateParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateParallelDataCommand = /** @class */ (function (_super) {
    __extends(UpdateParallelDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateParallelDataCommand(input) {
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
    UpdateParallelDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranslateClient";
        var commandName = "UpdateParallelDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateParallelDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateParallelDataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateParallelDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateParallelDataCommand(input, context);
    };
    UpdateParallelDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateParallelDataCommand(output, context);
    };
    return UpdateParallelDataCommand;
}($Command));
export { UpdateParallelDataCommand };
//# sourceMappingURL=UpdateParallelDataCommand.js.map