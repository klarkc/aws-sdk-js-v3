import { __extends } from "tslib";
import { GetPackageVersionAssetRequest, GetPackageVersionAssetResult } from "../models/models_0";
import { deserializeAws_restJson1GetPackageVersionAssetCommand, serializeAws_restJson1GetPackageVersionAssetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Returns an asset (or file) that is in a package. For example, for a Maven package version, use
 *       <code>GetPackageVersionAsset</code> to download a <code>JAR</code> file, a <code>POM</code> file,
 *       or any other assets in the package version.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetPackageVersionAssetCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetPackageVersionAssetCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetPackageVersionAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPackageVersionAssetCommandInput} for command's `input` shape.
 * @see {@link GetPackageVersionAssetCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPackageVersionAssetCommand = /** @class */ (function (_super) {
    __extends(GetPackageVersionAssetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPackageVersionAssetCommand(input) {
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
    GetPackageVersionAssetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "GetPackageVersionAssetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPackageVersionAssetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPackageVersionAssetResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPackageVersionAssetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPackageVersionAssetCommand(input, context);
    };
    GetPackageVersionAssetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPackageVersionAssetCommand(output, context);
    };
    return GetPackageVersionAssetCommand;
}($Command));
export { GetPackageVersionAssetCommand };
//# sourceMappingURL=GetPackageVersionAssetCommand.js.map