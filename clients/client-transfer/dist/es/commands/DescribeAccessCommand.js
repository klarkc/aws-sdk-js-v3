import { __extends } from "tslib";
import { DescribeAccessRequest, DescribeAccessResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeAccessCommand, serializeAws_json1_1DescribeAccessCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the access that is assigned to the specific file transfer protocol-enabled
 *       server, as identified by its <code>ServerId</code> property and its
 *       <code>ExternalID</code>.</p>
 *
 *          <p>The response from this call returns the properties of the access that is associated with
 *       the <code>ServerId</code> value that was specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DescribeAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccessCommand = /** @class */ (function (_super) {
    __extends(DescribeAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccessCommand(input) {
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
    DescribeAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "DescribeAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccessResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAccessCommand(input, context);
    };
    DescribeAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAccessCommand(output, context);
    };
    return DescribeAccessCommand;
}($Command));
export { DescribeAccessCommand };
//# sourceMappingURL=DescribeAccessCommand.js.map