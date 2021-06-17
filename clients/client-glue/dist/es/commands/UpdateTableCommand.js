import { __extends } from "tslib";
import { UpdateTableRequest, UpdateTableResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateTableCommand, serializeAws_json1_1UpdateTableCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a metadata table in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTableCommandInput} for command's `input` shape.
 * @see {@link UpdateTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTableCommand = /** @class */ (function (_super) {
    __extends(UpdateTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTableCommand(input) {
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
    UpdateTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTableResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTableCommand(input, context);
    };
    UpdateTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTableCommand(output, context);
    };
    return UpdateTableCommand;
}($Command));
export { UpdateTableCommand };
//# sourceMappingURL=UpdateTableCommand.js.map