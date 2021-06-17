import { __extends } from "tslib";
import { DescribeSourceServersRequest, DescribeSourceServersResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeSourceServersCommand, serializeAws_restJson1DescribeSourceServersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves all SourceServers or multiple SourceServers by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeSourceServersCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeSourceServersCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DescribeSourceServersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSourceServersCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceServersCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSourceServersCommand = /** @class */ (function (_super) {
    __extends(DescribeSourceServersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSourceServersCommand(input) {
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
    DescribeSourceServersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "DescribeSourceServersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSourceServersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSourceServersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSourceServersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSourceServersCommand(input, context);
    };
    DescribeSourceServersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSourceServersCommand(output, context);
    };
    return DescribeSourceServersCommand;
}($Command));
export { DescribeSourceServersCommand };
//# sourceMappingURL=DescribeSourceServersCommand.js.map