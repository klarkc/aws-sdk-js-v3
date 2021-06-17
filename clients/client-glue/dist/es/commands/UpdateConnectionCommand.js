import { __extends } from "tslib";
import { UpdateConnectionRequest, UpdateConnectionResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateConnectionCommand, serializeAws_json1_1UpdateConnectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a connection definition in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateConnectionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateConnectionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConnectionCommand = /** @class */ (function (_super) {
    __extends(UpdateConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateConnectionCommand(input) {
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
    UpdateConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateConnectionCommand(input, context);
    };
    UpdateConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateConnectionCommand(output, context);
    };
    return UpdateConnectionCommand;
}($Command));
export { UpdateConnectionCommand };
//# sourceMappingURL=UpdateConnectionCommand.js.map