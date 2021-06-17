import { __extends } from "tslib";
import { DescribeRepositoriesRequest, DescribeRepositoriesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeRepositoriesCommand, serializeAws_json1_1DescribeRepositoriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes image repositories in a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeRepositoriesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeRepositoriesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DescribeRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRepositoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRepositoriesCommand = /** @class */ (function (_super) {
    __extends(DescribeRepositoriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRepositoriesCommand(input) {
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
    DescribeRepositoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "DescribeRepositoriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRepositoriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRepositoriesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRepositoriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRepositoriesCommand(input, context);
    };
    DescribeRepositoriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRepositoriesCommand(output, context);
    };
    return DescribeRepositoriesCommand;
}($Command));
export { DescribeRepositoriesCommand };
//# sourceMappingURL=DescribeRepositoriesCommand.js.map