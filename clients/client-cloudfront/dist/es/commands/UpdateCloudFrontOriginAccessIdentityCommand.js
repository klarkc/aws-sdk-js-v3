import { __extends } from "tslib";
import {
  UpdateCloudFrontOriginAccessIdentityRequest,
  UpdateCloudFrontOriginAccessIdentityResult,
} from "../models/models_1";
import {
  deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand,
  serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update an origin access identity. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateCloudFrontOriginAccessIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCloudFrontOriginAccessIdentityCommandInput} for command's `input` shape.
 * @see {@link UpdateCloudFrontOriginAccessIdentityCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCloudFrontOriginAccessIdentityCommand = /** @class */ (function (_super) {
  __extends(UpdateCloudFrontOriginAccessIdentityCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateCloudFrontOriginAccessIdentityCommand(input) {
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
  UpdateCloudFrontOriginAccessIdentityCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "UpdateCloudFrontOriginAccessIdentityCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateCloudFrontOriginAccessIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCloudFrontOriginAccessIdentityResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateCloudFrontOriginAccessIdentityCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand(input, context);
  };
  UpdateCloudFrontOriginAccessIdentityCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand(output, context);
  };
  return UpdateCloudFrontOriginAccessIdentityCommand;
})($Command);
export { UpdateCloudFrontOriginAccessIdentityCommand };
//# sourceMappingURL=UpdateCloudFrontOriginAccessIdentityCommand.js.map
