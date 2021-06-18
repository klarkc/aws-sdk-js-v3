import { __extends } from "tslib";
import { DescribeTagsRequest, DescribeTagsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTagsCommand,
  serializeAws_json1_1DescribeTagsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of configuration items that have tags as specified by the key-value
 *       pairs, name and value, passed to the optional parameter <code>filters</code>.</p>
 *          <p>There are three valid tag filter names:</p>
 *          <ul>
 *             <li>
 *                <p>tagKey</p>
 *             </li>
 *             <li>
 *                <p>tagValue</p>
 *             </li>
 *             <li>
 *                <p>configurationId</p>
 *             </li>
 *          </ul>
 *          <p>Also, all configuration items associated with your user account that have tags can be
 *       listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeTagsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeTagsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTagsCommand = /** @class */ (function (_super) {
  __extends(DescribeTagsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeTagsCommand(input) {
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
  DescribeTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "DescribeTagsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTagsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeTagsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeTagsCommand(input, context);
  };
  DescribeTagsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeTagsCommand(output, context);
  };
  return DescribeTagsCommand;
})($Command);
export { DescribeTagsCommand };
//# sourceMappingURL=DescribeTagsCommand.js.map
