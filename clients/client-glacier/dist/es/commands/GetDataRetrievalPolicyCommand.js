import { __extends } from "tslib";
import { GetDataRetrievalPolicyInput, GetDataRetrievalPolicyOutput } from "../models/models_0";
import { deserializeAws_restJson1GetDataRetrievalPolicyCommand, serializeAws_restJson1GetDataRetrievalPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation returns the current data retrieval policy for the account and region
 *          specified in the GET request. For more information about data retrieval policies, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetDataRetrievalPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetDataRetrievalPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new GetDataRetrievalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataRetrievalPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDataRetrievalPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDataRetrievalPolicyCommand = /** @class */ (function (_super) {
    __extends(GetDataRetrievalPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDataRetrievalPolicyCommand(input) {
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
    GetDataRetrievalPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "GetDataRetrievalPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDataRetrievalPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetDataRetrievalPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDataRetrievalPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDataRetrievalPolicyCommand(input, context);
    };
    GetDataRetrievalPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDataRetrievalPolicyCommand(output, context);
    };
    return GetDataRetrievalPolicyCommand;
}($Command));
export { GetDataRetrievalPolicyCommand };
//# sourceMappingURL=GetDataRetrievalPolicyCommand.js.map