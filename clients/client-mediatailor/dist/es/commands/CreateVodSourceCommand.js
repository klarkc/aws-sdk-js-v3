import { __extends } from "tslib";
import { CreateVodSourceRequest, CreateVodSourceResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateVodSourceCommand, serializeAws_restJson1CreateVodSourceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates name for a specific VOD source in a source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateVodSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateVodSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new CreateVodSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVodSourceCommandInput} for command's `input` shape.
 * @see {@link CreateVodSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVodSourceCommand = /** @class */ (function (_super) {
    __extends(CreateVodSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVodSourceCommand(input) {
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
    CreateVodSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "CreateVodSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVodSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVodSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVodSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateVodSourceCommand(input, context);
    };
    CreateVodSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateVodSourceCommand(output, context);
    };
    return CreateVodSourceCommand;
}($Command));
export { CreateVodSourceCommand };
//# sourceMappingURL=CreateVodSourceCommand.js.map