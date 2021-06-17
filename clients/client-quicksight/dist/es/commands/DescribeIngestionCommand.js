import { __extends } from "tslib";
import { DescribeIngestionRequest, DescribeIngestionResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeIngestionCommand, serializeAws_restJson1DescribeIngestionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a SPICE ingestion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeIngestionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeIngestionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeIngestionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIngestionCommandInput} for command's `input` shape.
 * @see {@link DescribeIngestionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIngestionCommand = /** @class */ (function (_super) {
    __extends(DescribeIngestionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIngestionCommand(input) {
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
    DescribeIngestionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeIngestionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIngestionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeIngestionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIngestionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeIngestionCommand(input, context);
    };
    DescribeIngestionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeIngestionCommand(output, context);
    };
    return DescribeIngestionCommand;
}($Command));
export { DescribeIngestionCommand };
//# sourceMappingURL=DescribeIngestionCommand.js.map