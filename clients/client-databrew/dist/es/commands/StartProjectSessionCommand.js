import { __extends } from "tslib";
import { StartProjectSessionRequest, StartProjectSessionResponse } from "../models/models_0";
import { deserializeAws_restJson1StartProjectSessionCommand, serializeAws_restJson1StartProjectSessionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an interactive session, enabling you to manipulate data in a DataBrew
 *             project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, StartProjectSessionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, StartProjectSessionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new StartProjectSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartProjectSessionCommandInput} for command's `input` shape.
 * @see {@link StartProjectSessionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartProjectSessionCommand = /** @class */ (function (_super) {
    __extends(StartProjectSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartProjectSessionCommand(input) {
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
    StartProjectSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "StartProjectSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartProjectSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartProjectSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartProjectSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartProjectSessionCommand(input, context);
    };
    StartProjectSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartProjectSessionCommand(output, context);
    };
    return StartProjectSessionCommand;
}($Command));
export { StartProjectSessionCommand };
//# sourceMappingURL=StartProjectSessionCommand.js.map