import { __extends } from "tslib";
import { DescribeProductAsAdminInput, DescribeProductAsAdminOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeProductAsAdminCommand, serializeAws_json1_1DescribeProductAsAdminCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified product. This operation is run with administrator access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProductAsAdminCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProductAsAdminCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeProductAsAdminCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProductAsAdminCommandInput} for command's `input` shape.
 * @see {@link DescribeProductAsAdminCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProductAsAdminCommand = /** @class */ (function (_super) {
    __extends(DescribeProductAsAdminCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProductAsAdminCommand(input) {
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
    DescribeProductAsAdminCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DescribeProductAsAdminCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProductAsAdminInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProductAsAdminOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProductAsAdminCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeProductAsAdminCommand(input, context);
    };
    DescribeProductAsAdminCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeProductAsAdminCommand(output, context);
    };
    return DescribeProductAsAdminCommand;
}($Command));
export { DescribeProductAsAdminCommand };
//# sourceMappingURL=DescribeProductAsAdminCommand.js.map