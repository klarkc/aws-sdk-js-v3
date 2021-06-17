import { __extends } from "tslib";
import { CreateReturnShippingLabelRequest, CreateReturnShippingLabelResult } from "../models/models_0";
import { deserializeAws_json1_1CreateReturnShippingLabelCommand, serializeAws_json1_1CreateReturnShippingLabelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a shipping label that will be used to return the Snow device to AWS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateReturnShippingLabelCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateReturnShippingLabelCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CreateReturnShippingLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReturnShippingLabelCommandInput} for command's `input` shape.
 * @see {@link CreateReturnShippingLabelCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateReturnShippingLabelCommand = /** @class */ (function (_super) {
    __extends(CreateReturnShippingLabelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateReturnShippingLabelCommand(input) {
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
    CreateReturnShippingLabelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "CreateReturnShippingLabelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateReturnShippingLabelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateReturnShippingLabelResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateReturnShippingLabelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateReturnShippingLabelCommand(input, context);
    };
    CreateReturnShippingLabelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateReturnShippingLabelCommand(output, context);
    };
    return CreateReturnShippingLabelCommand;
}($Command));
export { CreateReturnShippingLabelCommand };
//# sourceMappingURL=CreateReturnShippingLabelCommand.js.map