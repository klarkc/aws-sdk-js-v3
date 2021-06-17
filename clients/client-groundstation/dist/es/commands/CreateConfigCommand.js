import { __extends } from "tslib";
import { ConfigIdResponse, CreateConfigRequest } from "../models/models_0";
import { deserializeAws_restJson1CreateConfigCommand, serializeAws_restJson1CreateConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p>
 *          <p>Only one type of <code>configData</code> can be specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new CreateConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigCommandInput} for command's `input` shape.
 * @see {@link CreateConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConfigCommand = /** @class */ (function (_super) {
    __extends(CreateConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateConfigCommand(input) {
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
    CreateConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "CreateConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfigIdResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateConfigCommand(input, context);
    };
    CreateConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateConfigCommand(output, context);
    };
    return CreateConfigCommand;
}($Command));
export { CreateConfigCommand };
//# sourceMappingURL=CreateConfigCommand.js.map