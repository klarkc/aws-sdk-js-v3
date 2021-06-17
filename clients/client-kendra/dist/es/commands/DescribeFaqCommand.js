import { __extends } from "tslib";
import { DescribeFaqRequest, DescribeFaqResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeFaqCommand, serializeAws_json1_1DescribeFaqCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about an FAQ list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeFaqCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeFaqCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeFaqCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFaqCommandInput} for command's `input` shape.
 * @see {@link DescribeFaqCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFaqCommand = /** @class */ (function (_super) {
    __extends(DescribeFaqCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFaqCommand(input) {
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
    DescribeFaqCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "DescribeFaqCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFaqRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFaqResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFaqCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeFaqCommand(input, context);
    };
    DescribeFaqCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeFaqCommand(output, context);
    };
    return DescribeFaqCommand;
}($Command));
export { DescribeFaqCommand };
//# sourceMappingURL=DescribeFaqCommand.js.map