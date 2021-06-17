import { __extends } from "tslib";
import { DescribeEntityRequest, DescribeEntityResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeEntityCommand, serializeAws_restJson1DescribeEntityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the metadata and content of the entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, DescribeEntityCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, DescribeEntityCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new DescribeEntityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEntityCommandInput} for command's `input` shape.
 * @see {@link DescribeEntityCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEntityCommand = /** @class */ (function (_super) {
    __extends(DescribeEntityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEntityCommand(input) {
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
    DescribeEntityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MarketplaceCatalogClient";
        var commandName = "DescribeEntityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEntityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEntityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEntityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeEntityCommand(input, context);
    };
    DescribeEntityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeEntityCommand(output, context);
    };
    return DescribeEntityCommand;
}($Command));
export { DescribeEntityCommand };
//# sourceMappingURL=DescribeEntityCommand.js.map