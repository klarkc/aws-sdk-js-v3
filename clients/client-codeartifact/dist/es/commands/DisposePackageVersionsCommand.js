import { __extends } from "tslib";
import { DisposePackageVersionsRequest, DisposePackageVersionsResult } from "../models/models_0";
import { deserializeAws_restJson1DisposePackageVersionsCommand, serializeAws_restJson1DisposePackageVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Deletes the assets in package versions and sets the package versions' status to <code>Disposed</code>.
 *       A disposed package version cannot be restored in your repository because its assets are deleted.
 *     </p>
 *
 *          <p>
 *       To view all disposed package versions in a repository, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a> and set the
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html#API_ListPackageVersions_RequestSyntax">status</a> parameter
 *       to <code>Disposed</code>.
 *     </p>
 *
 *          <p>
 *       To view information about a disposed package version, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html">DescribePackageVersion</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DisposePackageVersionsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DisposePackageVersionsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DisposePackageVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisposePackageVersionsCommandInput} for command's `input` shape.
 * @see {@link DisposePackageVersionsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisposePackageVersionsCommand = /** @class */ (function (_super) {
    __extends(DisposePackageVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisposePackageVersionsCommand(input) {
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
    DisposePackageVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "DisposePackageVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisposePackageVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisposePackageVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisposePackageVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisposePackageVersionsCommand(input, context);
    };
    DisposePackageVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisposePackageVersionsCommand(output, context);
    };
    return DisposePackageVersionsCommand;
}($Command));
export { DisposePackageVersionsCommand };
//# sourceMappingURL=DisposePackageVersionsCommand.js.map