import { __extends } from "tslib";
import { CreateProgramRequest, CreateProgramResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateProgramCommand, serializeAws_restJson1CreateProgramCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a program.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateProgramCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateProgramCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new CreateProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProgramCommandInput} for command's `input` shape.
 * @see {@link CreateProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProgramCommand = /** @class */ (function (_super) {
    __extends(CreateProgramCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProgramCommand(input) {
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
    CreateProgramCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "CreateProgramCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProgramRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProgramResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProgramCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateProgramCommand(input, context);
    };
    CreateProgramCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateProgramCommand(output, context);
    };
    return CreateProgramCommand;
}($Command));
export { CreateProgramCommand };
//# sourceMappingURL=CreateProgramCommand.js.map