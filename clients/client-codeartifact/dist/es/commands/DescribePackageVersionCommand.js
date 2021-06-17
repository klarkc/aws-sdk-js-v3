import { __extends } from "tslib";
import { DescribePackageVersionRequest, DescribePackageVersionResult } from "../models/models_0";
import { deserializeAws_restJson1DescribePackageVersionCommand, serializeAws_restJson1DescribePackageVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *        Returns a
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
 *        object that contains information about the requested package version.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DescribePackageVersionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DescribePackageVersionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DescribePackageVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePackageVersionCommandInput} for command's `input` shape.
 * @see {@link DescribePackageVersionCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePackageVersionCommand = /** @class */ (function (_super) {
    __extends(DescribePackageVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePackageVersionCommand(input) {
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
    DescribePackageVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "DescribePackageVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePackageVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePackageVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePackageVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribePackageVersionCommand(input, context);
    };
    DescribePackageVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribePackageVersionCommand(output, context);
    };
    return DescribePackageVersionCommand;
}($Command));
export { DescribePackageVersionCommand };
//# sourceMappingURL=DescribePackageVersionCommand.js.map