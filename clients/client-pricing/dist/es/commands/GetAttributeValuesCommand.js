import { __extends } from "tslib";
import { GetAttributeValuesRequest, GetAttributeValuesResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAttributeValuesCommand, serializeAws_json1_1GetAttributeValuesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of attribute values. Attibutes are similar to the details
 *           in a Price List API offer file. For a list of available attributes, see
 *          <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a>
 *          in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">AWS Billing and Cost Management User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, GetAttributeValuesCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, GetAttributeValuesCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * const client = new PricingClient(config);
 * const command = new GetAttributeValuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAttributeValuesCommandInput} for command's `input` shape.
 * @see {@link GetAttributeValuesCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAttributeValuesCommand = /** @class */ (function (_super) {
    __extends(GetAttributeValuesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAttributeValuesCommand(input) {
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
    GetAttributeValuesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PricingClient";
        var commandName = "GetAttributeValuesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAttributeValuesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAttributeValuesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAttributeValuesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAttributeValuesCommand(input, context);
    };
    GetAttributeValuesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAttributeValuesCommand(output, context);
    };
    return GetAttributeValuesCommand;
}($Command));
export { GetAttributeValuesCommand };
//# sourceMappingURL=GetAttributeValuesCommand.js.map