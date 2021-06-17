import { __extends } from "tslib";
import { DescribeJobLogItemsRequest, DescribeJobLogItemsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeJobLogItemsCommand, serializeAws_restJson1DescribeJobLogItemsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves detailed Job log with paging.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeJobLogItemsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeJobLogItemsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DescribeJobLogItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobLogItemsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobLogItemsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeJobLogItemsCommand = /** @class */ (function (_super) {
    __extends(DescribeJobLogItemsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeJobLogItemsCommand(input) {
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
    DescribeJobLogItemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "DescribeJobLogItemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeJobLogItemsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeJobLogItemsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeJobLogItemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeJobLogItemsCommand(input, context);
    };
    DescribeJobLogItemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeJobLogItemsCommand(output, context);
    };
    return DescribeJobLogItemsCommand;
}($Command));
export { DescribeJobLogItemsCommand };
//# sourceMappingURL=DescribeJobLogItemsCommand.js.map