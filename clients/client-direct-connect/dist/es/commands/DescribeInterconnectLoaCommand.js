import { __extends } from "tslib";
import { DescribeInterconnectLoaRequest, DescribeInterconnectLoaResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeInterconnectLoaCommand, serializeAws_json1_1DescribeInterconnectLoaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p>
 *          <p>Gets the LOA-CFA for the specified interconnect.</p>
 *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility.
 *       For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a>
 *       in the <i>AWS Direct Connect User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeInterconnectLoaCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeInterconnectLoaCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeInterconnectLoaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInterconnectLoaCommandInput} for command's `input` shape.
 * @see {@link DescribeInterconnectLoaCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInterconnectLoaCommand = /** @class */ (function (_super) {
    __extends(DescribeInterconnectLoaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInterconnectLoaCommand(input) {
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
    DescribeInterconnectLoaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeInterconnectLoaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInterconnectLoaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInterconnectLoaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInterconnectLoaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeInterconnectLoaCommand(input, context);
    };
    DescribeInterconnectLoaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeInterconnectLoaCommand(output, context);
    };
    return DescribeInterconnectLoaCommand;
}($Command));
export { DescribeInterconnectLoaCommand };
//# sourceMappingURL=DescribeInterconnectLoaCommand.js.map