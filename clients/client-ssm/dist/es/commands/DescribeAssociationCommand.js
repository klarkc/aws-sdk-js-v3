import { __extends } from "tslib";
import { DescribeAssociationRequest, DescribeAssociationResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeAssociationCommand, serializeAws_json1_1DescribeAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the association for the specified target or instance. If you created the
 *    association by using the <code>Targets</code> parameter, then you must retrieve the association
 *    by using the association ID. If you created the association by specifying an instance ID and a
 *    Systems Manager document, then you retrieve the association by specifying the document name and the
 *    instance ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssociationCommandInput} for command's `input` shape.
 * @see {@link DescribeAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAssociationCommand = /** @class */ (function (_super) {
    __extends(DescribeAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAssociationCommand(input) {
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
    DescribeAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAssociationCommand(input, context);
    };
    DescribeAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAssociationCommand(output, context);
    };
    return DescribeAssociationCommand;
}($Command));
export { DescribeAssociationCommand };
//# sourceMappingURL=DescribeAssociationCommand.js.map