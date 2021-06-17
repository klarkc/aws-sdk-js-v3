import { __extends } from "tslib";
import { CreateSourceLocationRequest, CreateSourceLocationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSourceLocationCommand, serializeAws_restJson1CreateSourceLocationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a source location on a specific channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new CreateSourceLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSourceLocationCommandInput} for command's `input` shape.
 * @see {@link CreateSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSourceLocationCommand = /** @class */ (function (_super) {
    __extends(CreateSourceLocationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSourceLocationCommand(input) {
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
    CreateSourceLocationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "CreateSourceLocationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSourceLocationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSourceLocationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSourceLocationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSourceLocationCommand(input, context);
    };
    CreateSourceLocationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSourceLocationCommand(output, context);
    };
    return CreateSourceLocationCommand;
}($Command));
export { CreateSourceLocationCommand };
//# sourceMappingURL=CreateSourceLocationCommand.js.map