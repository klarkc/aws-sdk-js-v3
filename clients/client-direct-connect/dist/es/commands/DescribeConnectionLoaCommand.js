import { __extends } from "tslib";
import { DescribeConnectionLoaRequest, DescribeConnectionLoaResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeConnectionLoaCommand, serializeAws_json1_1DescribeConnectionLoaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p>
 *          <p>Gets the LOA-CFA for a connection.</p>
 *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or
 *       service provider uses when establishing your cross connect to AWS at the colocation facility. For more information,
 *       see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects
 *       at AWS Direct Connect Locations</a> in the <i>AWS Direct Connect User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeConnectionLoaCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeConnectionLoaCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeConnectionLoaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectionLoaCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionLoaCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConnectionLoaCommand = /** @class */ (function (_super) {
    __extends(DescribeConnectionLoaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConnectionLoaCommand(input) {
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
    DescribeConnectionLoaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeConnectionLoaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConnectionLoaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConnectionLoaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConnectionLoaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConnectionLoaCommand(input, context);
    };
    DescribeConnectionLoaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConnectionLoaCommand(output, context);
    };
    return DescribeConnectionLoaCommand;
}($Command));
export { DescribeConnectionLoaCommand };
//# sourceMappingURL=DescribeConnectionLoaCommand.js.map