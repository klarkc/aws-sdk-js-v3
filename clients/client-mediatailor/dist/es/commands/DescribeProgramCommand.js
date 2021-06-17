import { __extends } from "tslib";
import { DescribeProgramRequest, DescribeProgramResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeProgramCommand, serializeAws_restJson1DescribeProgramCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the properties of the requested program.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeProgramCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeProgramCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DescribeProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProgramCommandInput} for command's `input` shape.
 * @see {@link DescribeProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProgramCommand = /** @class */ (function (_super) {
    __extends(DescribeProgramCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProgramCommand(input) {
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
    DescribeProgramCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "DescribeProgramCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProgramRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProgramResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProgramCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeProgramCommand(input, context);
    };
    DescribeProgramCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeProgramCommand(output, context);
    };
    return DescribeProgramCommand;
}($Command));
export { DescribeProgramCommand };
//# sourceMappingURL=DescribeProgramCommand.js.map