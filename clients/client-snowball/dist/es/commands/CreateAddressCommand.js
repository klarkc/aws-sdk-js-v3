import { __extends } from "tslib";
import { CreateAddressRequest, CreateAddressResult } from "../models/models_0";
import { deserializeAws_json1_1CreateAddressCommand, serializeAws_json1_1CreateAddressCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an address for a Snow device to be shipped to. In most regions,
 *       addresses are validated at the time of creation. The address you provide must be located
 *       within the serviceable area of your region. If the address is invalid or unsupported, then an
 *       exception is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateAddressCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateAddressCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CreateAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAddressCommandInput} for command's `input` shape.
 * @see {@link CreateAddressCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAddressCommand = /** @class */ (function (_super) {
    __extends(CreateAddressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAddressCommand(input) {
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
    CreateAddressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "CreateAddressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAddressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAddressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAddressCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAddressCommand(input, context);
    };
    CreateAddressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAddressCommand(output, context);
    };
    return CreateAddressCommand;
}($Command));
export { CreateAddressCommand };
//# sourceMappingURL=CreateAddressCommand.js.map