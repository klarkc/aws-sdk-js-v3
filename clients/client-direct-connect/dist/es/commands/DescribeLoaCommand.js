import { __extends } from "tslib";
import { DescribeLoaRequest, Loa } from "../models/models_0";
import { deserializeAws_json1_1DescribeLoaCommand, serializeAws_json1_1DescribeLoaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p>
 *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing
 *       your cross connect to AWS at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a>
 *       in the <i>AWS Direct Connect User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeLoaCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeLoaCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeLoaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoaCommandInput} for command's `input` shape.
 * @see {@link DescribeLoaCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLoaCommand = /** @class */ (function (_super) {
    __extends(DescribeLoaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLoaCommand(input) {
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
    DescribeLoaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeLoaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLoaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Loa.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLoaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLoaCommand(input, context);
    };
    DescribeLoaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLoaCommand(output, context);
    };
    return DescribeLoaCommand;
}($Command));
export { DescribeLoaCommand };
//# sourceMappingURL=DescribeLoaCommand.js.map