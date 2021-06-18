import { __extends } from "tslib";
import { GetInvalidationRequest, GetInvalidationResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetInvalidationCommand,
  serializeAws_restXmlGetInvalidationCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the information about an invalidation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetInvalidationCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetInvalidationCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetInvalidationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInvalidationCommandInput} for command's `input` shape.
 * @see {@link GetInvalidationCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInvalidationCommand = /** @class */ (function (_super) {
  __extends(GetInvalidationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetInvalidationCommand(input) {
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
  GetInvalidationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetInvalidationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetInvalidationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInvalidationResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetInvalidationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetInvalidationCommand(input, context);
  };
  GetInvalidationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetInvalidationCommand(output, context);
  };
  return GetInvalidationCommand;
})($Command);
export { GetInvalidationCommand };
//# sourceMappingURL=GetInvalidationCommand.js.map
