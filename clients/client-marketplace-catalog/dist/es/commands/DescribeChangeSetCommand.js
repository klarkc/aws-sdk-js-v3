import { __extends } from "tslib";
import { DescribeChangeSetRequest, DescribeChangeSetResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeChangeSetCommand, serializeAws_restJson1DescribeChangeSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about a given change set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, DescribeChangeSetCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, DescribeChangeSetCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new DescribeChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChangeSetCommandInput} for command's `input` shape.
 * @see {@link DescribeChangeSetCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeChangeSetCommand = /** @class */ (function (_super) {
    __extends(DescribeChangeSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeChangeSetCommand(input) {
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
    DescribeChangeSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MarketplaceCatalogClient";
        var commandName = "DescribeChangeSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeChangeSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeChangeSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeChangeSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeChangeSetCommand(input, context);
    };
    DescribeChangeSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeChangeSetCommand(output, context);
    };
    return DescribeChangeSetCommand;
}($Command));
export { DescribeChangeSetCommand };
//# sourceMappingURL=DescribeChangeSetCommand.js.map