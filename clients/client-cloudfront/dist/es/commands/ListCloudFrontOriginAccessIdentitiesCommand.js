import { __extends } from "tslib";
import {
  ListCloudFrontOriginAccessIdentitiesRequest,
  ListCloudFrontOriginAccessIdentitiesResult,
} from "../models/models_1";
import {
  deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand,
  serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists origin access identities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListCloudFrontOriginAccessIdentitiesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListCloudFrontOriginAccessIdentitiesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListCloudFrontOriginAccessIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCloudFrontOriginAccessIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListCloudFrontOriginAccessIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCloudFrontOriginAccessIdentitiesCommand = /** @class */ (function (_super) {
  __extends(ListCloudFrontOriginAccessIdentitiesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListCloudFrontOriginAccessIdentitiesCommand(input) {
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
  ListCloudFrontOriginAccessIdentitiesCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListCloudFrontOriginAccessIdentitiesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListCloudFrontOriginAccessIdentitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCloudFrontOriginAccessIdentitiesResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListCloudFrontOriginAccessIdentitiesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand(input, context);
  };
  ListCloudFrontOriginAccessIdentitiesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand(output, context);
  };
  return ListCloudFrontOriginAccessIdentitiesCommand;
})($Command);
export { ListCloudFrontOriginAccessIdentitiesCommand };
//# sourceMappingURL=ListCloudFrontOriginAccessIdentitiesCommand.js.map
